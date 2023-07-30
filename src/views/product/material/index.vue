<!--
 @description: 产品表
 @author: cgli
 @date: 2023-05-21
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:material:insert')"
          >新增产品表</a-button
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
                auth: 'sys:material:update',
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
                auth: 'sys:material:delete',
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
    <MaterialModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteMaterial, getMaterialList, batchDeleteMaterial } from "/@/api/product/Material";
  import { useModal } from "/@/components/general/Modal";
  import MaterialModal from "./MaterialModal.vue";
  import { columns, searchFormSchema } from "./material.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { onBeforeMount } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";
  export default {
    name: "MaterialManagement",
    components: { BasicTable, MaterialModal, TableAction },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "产品表列表",
        api: getMaterialList,
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
        deleteMaterial(record.id).then(() => {
          handleSuccess();
        });
      }

      function batchDelete() {
        batchDeleteMaterial(selectedIds.value).then(() => {
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
        flag,
      };
    },
  };
</script>
