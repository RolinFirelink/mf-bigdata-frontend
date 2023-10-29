<!--
 @description: 惠农网广东月供应数据
 @author: cgli
 @date: 2023-09-15
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
  import { inquiryDataGuangdongFormSchema } from "./inquiryDataGuangdong.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertInquiryDataGuangdong,
    updateInquiryDataGuangdong,
  } from "/@/api/docking/InquiryDataGuangdong";

  export default {
    name: "InquiryDataGuangdongModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: inquiryDataGuangdongFormSchema,
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
      const getTitle = computed(() =>
        !unref(isUpdate) ? "新增惠农网广东月供应数据" : "编辑惠农网广东月供应数据",
      );

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveInquiryDataGuangdong(updateInquiryDataGuangdong, values);
        } else {
          saveInquiryDataGuangdong(insertInquiryDataGuangdong, values);
        }
      }

      function saveInquiryDataGuangdong(save, values) {
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
