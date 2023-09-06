<!--
 @description: 文章
 @author: cgli
 @date: 2023-05-15
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <CropperImage
      :uploadApi="uploadApi"
      @del-img="imgUrl = ''"
      :value="imgUrl"
      :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
      @change="updateImg"
      width="300"
      height="150"
    />
    <BasicForm @register="registerForm" @submit="handleSubmit" />
    <ArticleContent ref="articleContent" style="z-index: 100" />
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
  import { uploadApi } from "/@/api/storage/Upload";
  import { CropperImage } from "/@/components/general/Cropper";
  export default {
    name: "ArticleModal",
    components: { BasicModal, BasicForm, ArticleContent, CropperImage },
    emits: ["success", "register"],
    setup(_, { emit }) {
      //图片地址
      const imgUrl = ref("");
      // 编辑器组件
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
        articleContent.value.show();
        // 清除编辑器的内容
        articleContent.value.clearContent();
        imgUrl.value = "";
        if (unref(isUpdate)) {
          // 获取文章内容
          articleContent.value.getContent(data.record.id);
          imgUrl.value = data.record.coverImg;
        }
        setTreeData();
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? "新增文章" : "编辑文章"));
      // 获取并设置内容分类树形列表
      async function setTreeData() {
        const treeData = await getArticleCategoryList();
        updateSchema([
          {
            field: "categoryId",
            componentProps: { treeData },
          },
        ]).then();
      }

      function updateImg({ data }, fileUrl) {
        console.log(data, fileUrl);
        imgUrl.value = fileUrl;
      }

      async function handleSubmit() {
        articleContent.value.closeEdit();
        let values = await validate();
        // 设置文章内容
        console.log(articleContent.value.valueHtml);
        values.content = encodeURIComponent(articleContent.value.valueHtml);
        values.coverImg = imgUrl.value;
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
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }

      return {
        imgUrl,
        uploadApi,
        updateImg,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        articleContent,
      };
    },
  };
</script>
