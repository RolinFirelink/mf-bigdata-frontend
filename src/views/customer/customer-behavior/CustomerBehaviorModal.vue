<!--
 @description: 客户消费行为表
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
  import { customerBehaviorFormSchema } from "./customerBehavior.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertCustomerBehavior, updateCustomerBehavior } from "/@/api/customer/CustomerBehavior";

  export default {
    name: "CustomerBehaviorModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: customerBehaviorFormSchema,
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
        !unref(isUpdate) ? "新增客户消费行为表" : "编辑客户消费行为表",
      );

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveCustomerBehavior(updateCustomerBehavior, values);
        } else {
          saveCustomerBehavior(insertCustomerBehavior, values);
        }
      }

      function saveCustomerBehavior(save, values) {
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
