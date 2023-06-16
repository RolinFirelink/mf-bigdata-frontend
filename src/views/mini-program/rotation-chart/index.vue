<!--
 @description: 轮播图图片
 @author: cgli
 @date: 2023-06-08
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:rotationChart:insert')"
          >新增轮播图图片</a-button
        >
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('sys:article:delete')"
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
                auth: 'sys:rotationChart:update',
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
                auth: 'sys:rotationChart:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RotationChartModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteRotationChart,
    getRotationChartList,
    batchDeleteRotationChart,
  } from "/@/api/miniProgram/RotationChart";
  import { useModal } from "/@/components/general/Modal";
  import RotationChartModal from "./RotationChartModal.vue";
  import { columns, searchFormSchema } from "./rotationChart.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "RotationChartManagement",
    components: { BasicTable, RotationChartModal, TableAction },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "轮播图图片列表",
        api: getRotationChartList,
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
        deleteRotationChart(record.id).then(() => {
          handleSuccess();
        });
      }

      function batchDelete() {
        batchDeleteRotationChart(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        selectedIds,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        batchDelete,
        handleSuccess,
        hasPermission,
      };
    },
  };
</script>
