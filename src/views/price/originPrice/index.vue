<!--
 @description: 产地价格
 @author: cgli
 @date: 2023-07-10
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:originPrice:insert')"
          >新增产地价格</a-button
        >
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('sys:originPrice:delete')"
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
                auth: 'sys:originPrice:update',
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
                auth: 'sys:originPrice:delete',
                tooltip: '删除',
              },
            ]"
          />
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
    <OriginPriceModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteOriginPrice,
    getOriginPriceList,
    batchDeleteOriginPrice,
  } from "/@/api/price/OriginPrice";
  import { useModal } from "/@/components/general/Modal";
  import OriginPriceModal from "./OriginPriceModal.vue";
  import { columns, searchFormSchema } from "./originPrice.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { onBeforeMount, ref } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";

  export default {
    name: "OriginPriceManagement",
    components: { BasicTable, OriginPriceModal, TableAction },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "产地价格列表",
        api: getOriginPriceList,
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

      const flag = ref<DictItem[]>([]);
      onBeforeMount(() => {
        getFlag();
      });

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
        deleteOriginPrice(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        reload();
      }

      function batchDelete() {
        batchDeleteOriginPrice(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        batchDelete,
        hasPermission,
        selectedIds,
        flag,
      };
    },
  };
</script>
