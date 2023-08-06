<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 18:23:36
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-06 13:51:47
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
        <Upload :customRequest="upload" :showUploadList="false">
          <a-button type="primary"> 上传数据 </a-button>
        </Upload>
        <a
          class="download"
          href="http://49.234.45.35:8888/storage/file/1bc758887cd2411b81ea199cf79f97da.xls?access_token=e9bf7b611f8a4df7b0925fccf71caa40"
          >下载导入模板</a
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
  import { uploadExcel } from "/@/api/analyse/BaseProductProductionScale";
  import { Upload } from "ant-design-vue";

  export default {
    name: "BaseProductProductionScaleManagement",
    components: { BasicTable, BaseProductProductionScaleModal, TableAction, Upload },
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

      function upload(action) {
        const file = action.file;
        let fileName = file.name;
        let suffix = fileName.substring(fileName.lastIndexOf(".") + 1);
        if (suffix != "xls" && suffix != "xlsx") {
          //导入文件错误
          return;
        }
        uploadExcel({ file: file }).then(() => {
          handleSuccess();
        });
      }

      return {
        upload,
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
