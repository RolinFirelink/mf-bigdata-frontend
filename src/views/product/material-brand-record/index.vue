<!--
 @description: 品牌产品中间表
 @author: cgli
 @date: 2023-05-21
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
<<<<<<< HEAD
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:materialBrandRecord:insert')"
          >新增品牌产品中间表</a-button
        >
=======
        <a-button type="primary" @click="handleCreate"
          v-if="hasPermission('sys:materialBrandRecord:insert')">新增品牌产品中间表</a-button>
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="[
            {
              icon: 'ant-design:edit-outlined',
              onClick: handleEdit.bind(null, record),
              auth: 'sys:materialBrandRecord:update',
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
              auth: 'sys:materialBrandRecord:delete',
              tooltip: '删除',
            },
          ]" />
        </template>
      </template>
    </BasicTable>
    <MaterialBrandRecordModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteMaterialBrandRecord,
    getMaterialBrandRecordList,
  } from "/@/api/product/MaterialBrandRecord";
  import { useModal } from "/@/components/general/Modal";
  import MaterialBrandRecordModal from "./MaterialBrandRecordModal.vue";
  import { columns, searchFormSchema } from "./materialBrandRecord.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "MaterialBrandRecordManagement",
    components: { BasicTable, MaterialBrandRecordModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "品牌产品中间表列表",
        api: getMaterialBrandRecordList,
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
        deleteMaterialBrandRecord(record.id).then(() => {
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
