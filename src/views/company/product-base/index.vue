<!--
 @description: 产品基地
 @author: cgli
 @date: 2023-05-24
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:productBase:insert')"
          >新增农业基地</a-button
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
          href="http://49.234.45.35:8888/storage/file/626405133c494fd8b8cc78bcaea3fe27.xls?access_token=e9bf7b611f8a4df7b0925fccf71caa40"
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
                auth: 'sys:productBase:update',
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
                auth: 'sys:productBase:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'attestation'">
          <Tag
            v-for="item in attestation"
            :key="item.dictCode + item.dictValue"
            v-show="record.attestation == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'flag'">
          <Tag
            v-for="item in flag"
            :key="item.dictCode + item.dictValue"
            v-show="record.flag == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
      </template>
    </BasicTable>
    <ProductBaseModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteProductBase,
    getProductBaseList,
    batchDeleteProductBase,
  } from "/@/api/company/ProductBase";
  import { useModal } from "/@/components/general/Modal";
  import ProductBaseModal from "./ProductBaseModal.vue";
  import { columns, searchFormSchema } from "./productBase.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { uploadExcel } from "/@/api/company/ProductBase";
  import { Upload } from "ant-design-vue";
  import { onBeforeMount } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";

  export default {
    name: "ProductBaseManagement",
    components: { BasicTable, ProductBaseModal, TableAction, Upload },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "产品基地列表",
        api: getProductBaseList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
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

      const attestation = ref<DictItem[]>([]);
      const flag = ref<DictItem[]>([]);
      onBeforeMount(() => {
        getAttestation();
        getFlag();
      });

      function getAttestation() {
        getDictItems("mk_attestation").then((res) => {
          attestation.value = res;
        });
      }
      function getFlag() {
        getDictItems("mk_product_type").then((res) => {
          flag.value = res;
        });
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
        deleteProductBase(record.id).then(() => {
          handleSuccess();
        });
      }

      function batchDelete() {
        batchDeleteProductBase(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
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

      function handleSuccess() {
        reload();
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
        attestation,
        flag,
      };
    },
  };
</script>
