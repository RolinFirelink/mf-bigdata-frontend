<!--
 @description: 内容分类
 @author: cgli
 @date: 2023-05-15
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { articleCategoryFormSchema } from "./articleCategory.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertArticleCategory,
    updateArticleCategory,
    getArticleCategoryList,
  } from "/@/api/cms/ArticleCategory";

  export default {
    name: "ArticleCategoryModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: articleCategoryFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setTreeData();
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增内容分类" : "编辑内容分类"));

      async function setTreeData() {
        const treeData = await getArticleCategoryList();
        updateSchema([
          {
            field: "parentId",
            componentProps: { treeData },
          },
        ]).then();
      }

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (!values.parentId) {
          values.parentId = 0;
        }
        if (unref(isUpdate)) {
          saveArticleCategory(updateArticleCategory, values);
        } else {
          saveArticleCategory(insertArticleCategory, values);
        }
      }

      function saveArticleCategory(save, values) {
        save(values)
          .then(() => {
            emit("success");
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }

      return {
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
