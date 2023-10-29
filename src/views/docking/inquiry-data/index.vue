<!--
 @description: 惠农网省份月采购数据
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
          v-if="hasPermission('sys:inquiryData:insert')"
          >新增惠农网省份月采购数据</a-button
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
                auth: 'sys:inquiryData:update',
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
                auth: 'sys:inquiryData:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <InquiryDataModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteInquiryData, getInquiryDataList } from "/@/api/docking/InquiryData";
  import { useModal } from "/@/components/general/Modal";
  import InquiryDataModal from "./InquiryDataModal.vue";
  import { columns, searchFormSchema } from "./inquiryData.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { Tag } from "ant-design-vue";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { ref } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  export default {
    name: "InquiryDataManagement",
    components: { BasicTable, InquiryDataModal, TableAction, Tag },
    setup() {
      //产品列表
      const productList = ref<DictItem[]>([]);
      load();
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "惠农网省份月采购数据列表",
        api: getInquiryDataList,
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
        deleteInquiryData(record.id).then(() => {
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
