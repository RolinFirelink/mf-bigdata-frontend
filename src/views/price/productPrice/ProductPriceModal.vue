<!--
 @description: 产品价格表
 @author: cgli
 @date: 2023-07-12
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
  import { productPriceFormSchema } from "./productPrice.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertProductPrice, updateProductPrice } from "/@/api/price/ProductPrice";

  export default {
    name: "ProductPriceModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: productPriceFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品价格表" : "编辑产品价格表"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveProductPrice(updateProductPrice, values);
        } else {
          saveProductPrice(insertProductPrice, values);
        }
      }

      function saveProductPrice(save, values) {
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
