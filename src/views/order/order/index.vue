<!--
 @description: 订单数据主表
 @author: cgli
 @date: 2023-05-24
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:shOrder:insert')"
          >新增订单数据主表
        </a-button>
      </template>
      <template #expandedRowRender="{ record }">
        <OrderDetail :parentId="record.id" :data="record.orderDetailList" @reload="handleSuccess" />
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:shOrder:update',
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
                auth: 'sys:shOrder:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ShOrderModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { toRaw } from "vue";
  import { useRouter } from "vue-router";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteShOrder, getShOrderList } from "/@/api/order/Order";
  import { useModal } from "/@/components/general/Modal";
  import ShOrderModal from "./OrderModal.vue";
  import { columns, searchFormSchema } from "./order.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import OrderDetail from "../orderDetail/OrderDetail.vue";

  export default {
    name: "ShOrderManagement",
    components: { BasicTable, ShOrderModal, TableAction, OrderDetail },
    setup() {
      // 根据路径获取分类id
      let router = useRouter();
      let path = toRaw(router).currentRoute.value.fullPath;
      let category = path.charAt(path.length - 1);

      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "订单数据主表列表",
        api: getShOrderList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
        },
        // 额外请求参数
        searchInfo: {
          category: category,
        },
        useSearchForm: true,
        showTableSetting: true,
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
        deleteShOrder(record.id).then(() => {
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
