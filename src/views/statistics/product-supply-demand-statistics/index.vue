<!--
 @description: 产品供需统计表
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
          v-if="hasPermission('sys:productSupplyDemandStatistics:insert')"
          >新增产品供需统计表</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:productSupplyDemandStatistics:update',
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
                auth: 'sys:productSupplyDemandStatistics:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ProductSupplyDemandStatisticsModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteProductSupplyDemandStatistics,
    getProductSupplyDemandStatisticsList,
  } from "/@/api/statistics/ProductSupplyDemandStatistics";
  import { useModal } from "/@/components/general/Modal";
  import ProductSupplyDemandStatisticsModal from "./ProductSupplyDemandStatisticsModal.vue";
  import { columns, searchFormSchema } from "./productSupplyDemandStatistics.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "ProductSupplyDemandStatisticsManagement",
    components: { BasicTable, ProductSupplyDemandStatisticsModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "产品供需统计表列表",
        api: getProductSupplyDemandStatisticsList,
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
        deleteProductSupplyDemandStatistics(record.id).then(() => {
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
