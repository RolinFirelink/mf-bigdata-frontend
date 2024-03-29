<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-12 14:45:34
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 16:47:51
 * @FilePath: \mf-bigdata-frontend\src\views\price\productPrice\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 产品价格表
 @author: cgli
 @date: 2023-07-12
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button
          type="primary"
          @click="handleCreate"
          v-if="hasPermission('sys:productPrice:insert')"
          >新增产品价格表</a-button
        >
        <a-button
          :disabled="!selectedIds"
          type="danger"
          @click="batchDelete"
          v-if="hasPermission('sys:productPrice:delete')"
          >批量删除</a-button
        >
        <Upload :customRequest="upload" :showUploadList="false">
          <a-button type="primary"> 上传数据 </a-button>
        </Upload>
        <a
          class="download"
          href="https://www.12221.com.cn/api/storage/file/138f854aa18c4706ac9656421415a498.xls"
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
                auth: 'sys:productPrice:update',
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
                auth: 'sys:productPrice:delete',
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
    <ProductPriceModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import {
    deleteProductPrice,
    getProductPriceList,
    batchDeleteProductPrice,
  } from "/@/api/price/ProductPrice";
  import { useModal } from "/@/components/general/Modal";
  import ProductPriceModal from "./ProductPriceModal.vue";
  import { columns, searchFormSchema } from "./productPrice.data";
  import { usePermission } from "/@/hooks/web/UsePermission";
  import { onBeforeMount, ref } from "vue";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { uploadExcel } from "/@/api/price/ProductPrice";
  import { Upload } from "ant-design-vue";

  export default {
    name: "ProductPriceManagement",
    components: { BasicTable, ProductPriceModal, TableAction, Upload },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "产品价格表列表",
        api: getProductPriceList,
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
        deleteProductPrice(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        reload();
      }

      function batchDelete() {
        batchDeleteProductPrice(selectedIds.value).then(() => {
          handleSuccess();
          selectedIds.value = "";
        });
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
        batchDelete,
        hasPermission,
        selectedIds,
        flag,
      };
    },
  };
</script>
