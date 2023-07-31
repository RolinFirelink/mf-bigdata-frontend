<!--
 @description: 采购商指数
 @author: cgli
 @date: 2023-07-16
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
  import { buyersIndexFormSchema } from "./buyersIndex.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertBuyersIndex, updateBuyersIndex } from "/@/api/analyse/BuyersIndex";

  export default {
    name: "BuyersIndexModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: buyersIndexFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增采购商指数" : "编辑采购商指数"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveBuyersIndex(updateBuyersIndex, values);
        } else {
          saveBuyersIndex(insertBuyersIndex, values);
        }
      }

      function saveBuyersIndex(save, values) {
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
