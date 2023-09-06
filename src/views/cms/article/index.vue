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
        <a-button type="primary" @click="handleCreate">新增文章</a-button>
        <a-button :disabled="!selectedIds" type="danger" @click="batchDelete">批量删除</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:edit-outlined',
                onClick: handleEdit.bind(null, record),
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
                tooltip: '删除',
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'status'">
          <Tag
            v-for="item in statusList"
            :key="item.dictCode + item.dictValue"
            v-show="record.status == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'isTop'">
          <Tag
            v-for="item in topList"
            :key="item.dictCode + item.dictValue"
            v-show="record.isTop == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
        <template v-if="column.key === 'inclined'">
          <Tag
            v-for="item in inclinedList"
            :key="item.dictCode + item.dictValue"
            v-show="record.inclined == item.dictValue"
            :color="item.color"
          >
            {{ item.dictLabel }}
          </Tag>
        </template>
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
  import { getDictItems } from "/@/api/sys/DictItem";
  import { DictItem } from "/@/api/sys/model/DictItemModel";
  import { Tag } from "ant-design-vue";

  export default {
    name: "ArticleManagement",
    components: { BasicTable, ArticleModal, TableAction, Tag },
    setup() {
      //产品列表
      const productList = ref<DictItem[]>([]);
      //倾向性
      const inclinedList = ref<DictItem[]>([]);
      //状态
      const statusList = ref<DictItem[]>([]);
      //置顶
      const topList = ref<DictItem[]>([]);
      load();
      // 多选ID数组字符串（逗号隔开）
      const selectedIds = ref("");
      // 根据路径获取分类id
      let router = useRouter();
      let path = toRaw(router).currentRoute.value.fullPath;
      let parts = path.split(/[^0-9]+/);
      let categoryId = parts[parts.length - 1];
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

      async function load() {
        productList.value = await getDictItems("mk_product_type");
        inclinedList.value = await getDictItems("mk_article_inclined");
        statusList.value = await getDictItems("mk_article_status");
        topList.value = await getDictItems("mk_article_top");
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
        inclinedList,
        productList,
        statusList,
        topList,
      };
    },
  };
</script>
