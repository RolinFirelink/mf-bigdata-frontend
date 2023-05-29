<!--
 @description: 货运表
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
          v-if="hasPermission('sys:productCirculationData:insert')"
          >新增货运表</a-button
        >
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('sys:freightProgress:delete')"
          >批量删除</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:productCirculationData:update',
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
                auth: 'sys:productCirculationData:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ProductCirculationDataModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteProductCirculationData,
    getProductCirculationDataList,
    batchDeleteProductCirculationData,
  } from "/@/api/cargo/ProductCirculationData";
  import { useModal } from "/@/components/general/Modal";
  import ProductCirculationDataModal from "./ProductCirculationDataModal.vue";
  import { columns, searchFormSchema } from "./productCirculationData.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "ProductCirculationDataManagement",
    components: { BasicTable, ProductCirculationDataModal, TableAction },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "货运表列表",
        api: getProductCirculationDataList,
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
        deleteProductCirculationData(record.id).then(() => {
          handleSuccess();
        });
      }

      function batchDelete() {
        batchDeleteProductCirculationData(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        selectedIds,
        batchDelete,
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
