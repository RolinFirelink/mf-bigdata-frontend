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
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('web:order:save')"
          >批量删除</a-button
        >
        <Upload :customRequest="uploadOrder" :showUploadList="false">
          <a-button type="primary"> 上传订单数据 </a-button>
        </Upload>
        <Upload :customRequest="uploadOrderDetail" :showUploadList="false">
          <a-button type="primary"> 上传订单产品数据 </a-button>
        </Upload>
      </template>
      <template #expandedRowRender="{ record }">
        <OrderDetail :orderId="record.id" ref="orderDetail" :data="record.orderDetailList" />
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
    <OrderModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { toRaw, ref } from "vue";
  import { useRouter } from "vue-router";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteOrder, getOrderList, batchDeleteOrder } from "/@/api/order/Order";
  import { useModal } from "/@/components/general/Modal";
  import OrderModal from "./OrderModal.vue";
  import { columns, searchFormSchema } from "./order.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import OrderDetail from "../orderDetail/OrderDetail.vue";
  import { uploadOrderExcel } from "/@/api/order/Order";
  import { uploadOrderDetailExcel } from "/@/api/order/OrderDetail";
  import { Upload } from "ant-design-vue";

  export default {
    name: "OrderManagement",
    components: { BasicTable, OrderModal, TableAction, OrderDetail, Upload },
    setup() {
      const orderDetail = ref();
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      // 根据路径获取分类id
      let router = useRouter();
      let path = toRaw(router).currentRoute.value.fullPath;
      let category = path.charAt(path.length - 1);

      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "订单数据主表列表",
        api: getOrderList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
        },
        // 额外请求参数
        searchInfo: {
          category: category,
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
        deleteOrder(record.id).then(() => {
          handleSuccess();
        });
      }
      function batchDelete() {
        batchDeleteOrder(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
      }

      function handleSuccess() {
        reload();
      }

      function uploadOrder(action) {
        const file = action.file;
        let fileName = file.name;
        let suffix = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (suffix != "xls" && suffix != "xlsx") {
          //导入文件错误
          return;
        }
        uploadOrderExcel({ file: file }).then(() => {
          handleSuccess();
        });
      }

      function uploadOrderDetail(action) {
        const file = action.file;
        let fileName = file.name;
        let suffix = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (suffix != "xls" && suffix != "xlsx") {
          //导入文件错误
          return;
        }
        uploadOrderDetailExcel({ file: file }).then(() => {
          handleSuccess();
        });
      }

      return {
        uploadOrder,
        uploadOrderDetail,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        hasPermission,
        selectedIds,
        batchDelete,
        orderDetail,
      };
    },
  };
</script>
