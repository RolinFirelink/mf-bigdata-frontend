<!--
 @description: 文章
 @author: cgli
 @date: 2023-05-15
 @version: V1.0.0
-->
<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" v-if="hasPermission('sys:article:insert')"
          >新增文章</a-button
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
                auth: 'sys:article:update',
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
                auth: 'sys:article:delete',
                tooltip: '删除',
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <ArticleModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
  import { toRaw, ref } from "vue";
  import { useRouter } from "vue-router";
  import { BasicTable, useTable, TableAction } from "/@/components/general/Table";
  import { deleteArticle, getArticleList, batchDeleteArticle } from "/@/api/cms/Article";
  import { useModal } from "/@/components/general/Modal";
  import ArticleModal from "./ArticleModal.vue";
  import { columns, searchFormSchema } from "./article.data";
  import { usePermission } from "/@/hooks/web/UsePermission";

  export default {
    name: "ArticleManagement",
    components: { BasicTable, ArticleModal, TableAction },
    setup() {
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      // 根据路径获取分类id
      let router = useRouter();
      let path = toRaw(router).currentRoute.value.fullPath;
      let categoryId = Number(path.charAt(path.length - 1));
      if (categoryId === 0) {
        categoryId = 10;
      }
      const { hasPermission } = usePermission();
      const [registerModal, { openModal }] = useModal();
      const [registerTable, { reload }] = useTable({
        title: "文章列表",
        api: getArticleList,
        // 额外参数
        searchInfo: {
          categoryId: categoryId,
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
        deleteArticle(record.id).then(() => {
          handleSuccess();
        });
      }

      function handleSuccess() {
        reload();
      }

      function batchDelete() {
        batchDeleteArticle(selectedIds.value).then(() => {
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
        hasPermission,
        batchDelete,
        selectedIds,
      };
    },
  };
</script>
