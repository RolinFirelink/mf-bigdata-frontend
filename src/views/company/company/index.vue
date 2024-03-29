<!--
 @description: 企业、供货商、销售商和承运商
 @author: cgli
 @date: 2023-05-24
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:company:insert')"
          >新增企业</a-button
        >
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('sys:company:delete')"
          >批量删除</a-button
        >
        <Upload :customRequest="upload" :showUploadList="false">
          <a-button type="primary"> 上传数据 </a-button>
        </Upload>
        <a
          class="download"
          href="http://www.12221.com.cn/api/storage/file/ecb275ac82b944ba8c5005def592f45d.xlsx"
          >下载导入模板</a
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:company:update',
                tooltip: '修改',
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                auth: 'sys:company:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'companyType'">
          <Tag
            v-for="item in companyTypeList"
            :key="item.dictCode + item.dictValue"
            v-show="record.inclined == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <CompanyModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { toRaw, ref } from "vue";
  import { useRouter } from "vue-router";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteCompany, getCompanyList, bastchdeleteCompany } from "/@/api/company/Company";
  import { useModal } from "/@/components/general/Modal";
  import CompanyModal from "./CompanyModal.vue";
  import { columns, searchFormSchema } from "./company.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { uploadExcel } from "/@/api/company/Company";
  import { Upload } from "ant-design-vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { Tag } from "ant-design-vue";
  export default {
    name: "CompanyManagement",
    components: { BasicTable, CompanyModal, TableAction, Upload, Tag },
    setup() {
      const companyTypeList = ref<DictItem[]>([]);
      load();
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      // 根据路径获取公司类型
      let router = useRouter();
      let path = toRaw(router).currentRoute.value.fullPath;
      let companyType1 = path.charAt(path.length - 1);
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "企业列表",
        api: getCompanyList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
        },
        // 额外请求参数
        searchInfo: {
          companyType: companyType1,
        },
        // 多选功能
        rowSelection: {
          checkStrictly: false,
          onChange: (_, selectedRows) => {
            selectedIds.value = "";
            selectedRows.forEach((item) => {
              selectedIds.value += item.id + ",";
            });
          },
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: "操作",
          dataIndex: "action",
        },
      });

      async function load() {
        companyTypeList.value = await getDictItems("mk_company_type");
      }

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteCompany(record.id).then(() => {
          handleSuccess();
        });
      }

      function batchDelete() {
        bastchdeleteCompany(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
      }

      function handleSuccess() {
        reload();
      }

      function upload(action) {
        const file = action.file;
        let fileName = file.name;
        let suffix = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (suffix != "xls" && suffix != "xlsx") {
          //导入文件错误
          return;
        }
        uploadExcel({ file: file }).then(() => {
          handleSuccess();
        });
      }

      return {
        upload,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        hasPermission,
        selectedIds,
        batchDelete,
        companyTypeList,
      };
    },
  };
</script>
