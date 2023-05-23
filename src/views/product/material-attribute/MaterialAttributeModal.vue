<!--
 @description: 产品属性表
 @author: cgli
 @date: 2023-05-21
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
<<<<<<< HEAD
  import { ref, computed, unref } from "vue";
  import { BasicForm, useForm } from "/@/components/general/Form";
  import { materialAttributeFormSchema } from "./materialAttribute.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertMaterialAttribute,
    updateMaterialAttribute,
  } from "/@/api/product/MaterialAttribute";
=======
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { materialAttributeFormSchema } from "./materialAttribute.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertMaterialAttribute, updateMaterialAttribute } from "/@/api/product/MaterialAttribute";
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d

  export default {
    name: "MaterialAttributeModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: materialAttributeFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品属性表" : "编辑产品属性表"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveMaterialAttribute(updateMaterialAttribute, values);
        } else {
          saveMaterialAttribute(insertMaterialAttribute, values);
        }
      }

      function saveMaterialAttribute(save, values) {
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
