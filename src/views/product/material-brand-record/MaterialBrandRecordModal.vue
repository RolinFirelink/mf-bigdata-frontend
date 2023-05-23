<!--
 @description: 品牌产品中间表
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
  import { materialBrandRecordFormSchema } from "./materialBrandRecord.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertMaterialBrandRecord,
    updateMaterialBrandRecord,
  } from "/@/api/product/MaterialBrandRecord";
=======
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { materialBrandRecordFormSchema } from "./materialBrandRecord.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertMaterialBrandRecord, updateMaterialBrandRecord } from "/@/api/product/MaterialBrandRecord";
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d

  export default {
    name: "MaterialBrandRecordModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: materialBrandRecordFormSchema,
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
        !unref(isUpdate) ? "新增品牌产品中间表" : "编辑品牌产品中间表",
      );

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveMaterialBrandRecord(updateMaterialBrandRecord, values);
        } else {
          saveMaterialBrandRecord(insertMaterialBrandRecord, values);
        }
      }

      function saveMaterialBrandRecord(save, values) {
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
