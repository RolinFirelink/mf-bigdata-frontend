<!--
 @description: 订单详情产品信息
 @author: zsj
 @date: 2023-05-24
 @version: V1.0.0
-->
<template>
  <div>
    <a-button @click="handleCreate" type="primary" style="margin-bottom: 5px">新增</a-button>
    <Table :columns="columns" :dataSource="orderDetailList" style="margin: 0" :pagination="false">
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
    </Table>
    <OrderDetailModal :orderId="orderId" @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script>
  import { ref } from "vue";
  import { TableAction } from "/@/components/general/Table";
  import { Table } from "ant-design-vue";
  import OrderDetailModal from "./OrderDetailModal.vue";
  import { deleteOrderDetail, listByOrderId } from "/@/api/order/OrderDetail";
  import { useModal } from "/@/components/general/Modal";
  export default {
    name: "OrderDetail",
    components: { Table, TableAction, OrderDetailModal },
    props: {
      orderId: String,
      data: Array,
    },
    setup(props) {
      const orderDetailList = ref([]);
      orderDetailList.value = props.data || [];
      const [registerModal, { openModal }] = useModal();
      const columns = [
        {
          title: "产品名称",
          dataIndex: "materialName",
          key: "materialName",
        },
        {
          title: "单价",
          dataIndex: "salesAmount",
          key: "salesAmount",
        },
        {
          title: "数量",
          dataIndex: "salesQuantity",
          key: "salesQuantity",
        },
        {
          title: "数量单位",
          dataIndex: "unit",
          key: "unit",
        },
        {
          title: "操作",
          dataIndex: "action",
          key: "action",
        },
      ];

      async function setData() {
        orderDetailList.value = await listByOrderId(props.orderId);
      }

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record) {
        deleteOrderDetail(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        setData();
      }

      return {
        orderDetailList,
        setData,
        handleCreate,
        registerModal,
        columns,
        handleEdit,
        handleDelete,
        handleSuccess,
      };
    },
  };
</script>
