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
          >新增企业、供货商、销售商和承运商</a-button
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
      </template>
    </BasicTable>
    <CompanyModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { toRaw } from "vue";
  import { useRouter } from "vue-router";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteCompany, getCompanyList } from "/@/api/company/Company";
  import { useModal } from "/@/components/general/Modal";
  import CompanyModal from "./CompanyModal.vue";
  import { columns, searchFormSchema } from "./company.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "CompanyManagement",
    components: { BasicTable, CompanyModal, TableAction },
    setup() {
      // 根据路径获取公司类型
      let router = useRouter();
      let path = toRaw(router).currentRoute.value.fullPath;
      let companyType = path.charAt(path.length - 1);
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "企业、供货商、销售商和承运商列表",
        api: getCompanyList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
        },
        // 额外请求参数
        searchInfo: {
          companyType: companyType,
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

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        hasPermission,
      };
    },
  };
</script>
