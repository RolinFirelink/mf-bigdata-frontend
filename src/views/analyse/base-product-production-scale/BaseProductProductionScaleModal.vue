<!--
 @description: 基地产品生产规模数据表
 @author: cgli
 @date: 2023-07-20
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
  import { baseProductProductionScaleFormSchema } from "./baseProductProductionScale.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertBaseProductProductionScale,
    updateBaseProductProductionScale,
  } from "/@/api/analyse/BaseProductProductionScale";
  import { getMaterialOptions } from "/@/api/product/Material";
  import { getProductBaseOptions } from "/@/api/company/ProductBase";

  export default {
    name: "BaseProductProductionScaleModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const baseList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: baseProductProductionScaleFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setOptions();
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() =>
        !unref(isUpdate) ? "新增基地产品生产规模数据表" : "编辑基地产品生产规模数据表",
      );
      async function setOptions() {
        baseList.value = await getProductBaseOptions();
        const materialList = await getMaterialOptions();
        updateSchema([
          {
            field: "baseId",
            componentProps: { options: baseList.value },
          },
          {
            field: "product",
            componentProps: { options: materialList },
          },
        ]);
      }

      async function handleSubmit() {
        let values = await validate();
        baseList.value.forEach((item) => {
          if (item.id === values.baseId) {
            return (values.name = item.name);
          }
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveBaseProductProductionScale(updateBaseProductProductionScale, values);
        } else {
          saveBaseProductProductionScale(insertBaseProductProductionScale, values);
        }
      }

      function saveBaseProductProductionScale(save, values) {
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
        baseList,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
