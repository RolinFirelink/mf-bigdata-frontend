<!--
 @description: 产品基地
 @author: cgli
 @date: 2023-05-24
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
  import { productBaseFormSchema } from "./productBase.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertProductBase, updateProductBase } from "/@/api/company/ProductBase";
  import { getCompanyOptions } from "/@/api/company/Company";

  export default {
    name: "ProductBaseModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: productBaseFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setListData();
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品基地" : "编辑产品基地"));

      // 获取并设置供应商列表数据
      async function setListData() {
        const companyList = await getCompanyOptions(1);
        updateSchema([
          {
            field: "parentId",
            componentProps: { options: companyList },
          },
        ]).then();
      }

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveProductBase(updateProductBase, values);
        } else {
          saveProductBase(insertProductBase, values);
        }
      }

      function saveProductBase(save, values) {
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
