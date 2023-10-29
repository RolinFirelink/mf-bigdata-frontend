<!--
 @description: 惠农网批发市场数据
 @author: cgli
 @date: 2023-09-15
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:marketPrice:insert')"
          >新增惠农网批发市场数据</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'flag'">
          <Tag
            v-for="item in productList"
            :key="item.dictCode + item.dictValue"
            v-show="record.flag == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:marketPrice:update',
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
                auth: 'sys:marketPrice:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <MarketPriceModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteMarketPrice, getMarketPriceList } from "/@/api/docking/MarketPrice";
  import { useModal } from "/@/components/general/Modal";
  import MarketPriceModal from "./MarketPriceModal.vue";
  import { columns, searchFormSchema } from "./marketPrice.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { Tag } from "ant-design-vue";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { ref } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  export default {
    name: "MarketPriceManagement",
    components: { BasicTable, MarketPriceModal, TableAction, Tag },
    setup() {
      //产品列表
      const productList = ref<DictItem[]>([]);
      load();
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "惠农网批发市场数据列表",
        api: getMarketPriceList,
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

      async function load() {
        productList.value = await getDictItems("mk_product_type");
      }

      function handleEdit(record: Recordable) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        deleteMarketPrice(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        productList,
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
