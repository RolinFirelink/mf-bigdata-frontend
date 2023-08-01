<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 18:23:36
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 18:27:56
 * @FilePath: \mf-bigdata-frontend\src\views\analyse\base-product-production-scale\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 基地产品生产规模数据表
 @author: cgli
 @date: 2023-07-20
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:baseProductProductionScale:insert')"
          >新增基地产品生产规模数据表</a-button
        >
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
                auth: 'sys:baseProductProductionScale:update',
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
                auth: 'sys:baseProductProductionScale:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <BaseProductProductionScaleModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteBaseProductProductionScale,
    getBaseProductProductionScaleList,
  } from "/@/api/analyse/BaseProductProductionScale";
  import { useModal } from "/@/components/general/Modal";
  import BaseProductProductionScaleModal from "./BaseProductProductionScaleModal.vue";
  import { columns, searchFormSchema } from "./baseProductProductionScale.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "BaseProductProductionScaleManagement",
    components: { BasicTable, BaseProductProductionScaleModal, TableAction },
    setup() {
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "基地产品生产规模数据表列表",
        api: getBaseProductProductionScaleList,
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
        deleteBaseProductProductionScale(record.id).then(() => {
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
