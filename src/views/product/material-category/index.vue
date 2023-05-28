<!--
 @description: 产品表
 @author: cgli
 @date: 2023-05-21
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable" @expand="getChildrenData">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:materialCategory:insert')"
          >新增产品表</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:materialCategory:update',
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
                auth: 'sys:materialCategory:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <materialCategoryModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteMaterialCategory,
    getMaterialCategoryList,
    getListByParentId,
  } from "/@/api/product/MaterialCategory";
  import { useModal } from "/@/components/general/Modal";
  import materialCategoryModal from "./MaterialCategoryModal.vue";
  import { columns, searchFormSchema } from "./materialCategory.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "MaterialCategoryManagement",
    components: { BasicTable, materialCategoryModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "产品分类表列表",
        api: getMaterialCategoryList,
        columns,
        formConfig: {
          labelWidth: 100,
          schemas: searchFormSchema,
        },
        //对行相关操作所区分的key绑定为id
        rowKey: "id",
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        showIndexColumn: false,
        actionColumn: {
          width: 80,
          title: "操作",
          dataIndex: "action",
        },
        isTreeTable: true,
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
        deleteMaterialCategory(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        reload();
      }

      async function getChildrenData(isOpen, value) {
        if (isOpen) {
          const data = (await getListByParentId(value.id)) || [];
          value.children = data || [];
          if (value.children.length == 0) {
            value.children = null;
          }
        }
      }

      return {
        getChildrenData,
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
