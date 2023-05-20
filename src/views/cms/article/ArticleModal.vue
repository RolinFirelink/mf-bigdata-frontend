<!--
 @description: 文章
 @author: cgli
 @date: 2023-05-15
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
    <ArticleContent ref="articleContent" v-if="dialogVisible" />
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { articleFormSchema } from "./article.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertArticle, updateArticle } from "/@/api/cms/Article";
  import { getArticleCategoryList } from "/@/api/cms/ArticleCategory";
  import ArticleContent from "./ArticleContent.vue";

  export default {
    name: "ArticleModal",
    components: { BasicModal, BasicForm, ArticleContent },
    emits: ["success", "register"],
    setup(_, { emit }) {
      // 编辑器组件
      const dialogVisible = ref(true);
      const articleContent = ref();
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: articleFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        // 打开编辑器
        // articleContent.value.show();
        if (unref(isUpdate)) {
          // 获取文章内容
          articleContent.value.getContent(data.record.id);
        }
        setTreeData();

        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增文章" : "编辑文章"));
      async function setTreeData() {
        const treeData = await getArticleCategoryList();
        updateSchema([
          {
            field: "categoryId",
            componentProps: { treeData },
          },
        ]).then();
      }
      async function handleSubmit() {
        let values = await validate();
        // 设置文章内容
        values.content = encodeURIComponent(articleContent.value.valueHtml);

        setModalProps({ confirmLoading: true });

        if (unref(isUpdate)) {
          saveArticle(updateArticle, values);
        } else {
          saveArticle(insertArticle, values);
        }
      }

      function saveArticle(save, values) {
        save(values)
          .then(() => {
            emit("success");
            // 关闭编辑器
            // articleContent.value.closeEditor();
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }
      function changeShow() {
        dialogVisible.value = !dialogVisible.value;
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        articleContent,
        dialogVisible,
        changeShow,
      };
    },
  };
</script>
