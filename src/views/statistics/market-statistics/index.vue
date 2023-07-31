<!--
 @description: 市场行情统计表
 @author: cgli
 @date: 2023-07-17
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:marketStatistics:insert')"
          >新增市场行情统计表</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:marketStatistics:update',
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
                auth: 'sys:marketStatistics:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MarketStatisticsModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteMarketStatistics,
    getMarketStatisticsList,
  } from "/@/api/statistics/MarketStatistics";
  import { useModal } from "/@/components/general/Modal";
  import MarketStatisticsModal from "./MarketStatisticsModal.vue";
  import { columns, searchFormSchema } from "./marketStatistics.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "MarketStatisticsManagement",
    components: { BasicTable, MarketStatisticsModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "市场行情统计表列表",
        api: getMarketStatisticsList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
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
        deleteMarketStatistics(record.id).then(() => {
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
