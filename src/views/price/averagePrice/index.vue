<!--
 @description: 均价表
 @author: cgli
 @date: 2023-05-30
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:averagePrice:insert')"
          >新增均价表</a-button
        >
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('sys:averagePrice:delete')"
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
                auth: 'sys:shAveragePrice:update',
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
                auth: 'sys:shAveragePrice:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AveragePriceModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteAveragePrice,
    getAveragePriceList,
    batchDeleteAveragePrice,
  } from "/@/api/price/AveragePrice";
  import { useModal } from "/@/components/general/Modal";
  import AveragePriceModal from "./AveragePriceModal.vue";
  import { columns, searchFormSchema } from "./averagePrice.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "AveragePriceManagement",
    components: { BasicTable, AveragePriceModal, TableAction },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "均价表列表",
        api: getAveragePriceList,
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
        deleteAveragePrice(record.id).then(() => {
          handleSuccess();
        });
      }

      function batchDelete() {
        batchDeleteAveragePrice(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
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
        batchDelete,
        selectedIds,
      };
    },
  };
</script>
