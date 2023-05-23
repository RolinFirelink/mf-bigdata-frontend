<!--
 @description: 产品生产表
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
import { ref, computed, unref } from "vue";
import { BasicForm, useForm } from "/@/components/general/Form/index";
import { materialProduceFormSchema } from "./materialProduce.data";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { insertMaterialProduce, updateMaterialProduce } from "/@/api/product/MaterialProduce";

export default {
  name: "MaterialProduceModal",
  components: { BasicModal, BasicForm },
  emits: ["success", "register"],
  setup(_, { emit }) {
    const isUpdate = ref(true);
    const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
      labelWidth: 100,
      baseColProps: { span: 12 },
      schemas: materialProduceFormSchema,
      showActionButtonGroup: false,
      autoSubmitOnEnter: true
    });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      resetFields().then();
      setModalProps({ confirmLoading: false, width: "800px" });
      isUpdate.value = !!data?.isUpdate;
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record
        }).then();
      }
    });
    const getTitle = computed(() => (!unref(isUpdate) ? "新增产品生产表" : "编辑产品生产表"));

    async function handleSubmit() {
      let values = await validate();
      setModalProps({ confirmLoading: true });
      if (unref(isUpdate)) {
        saveMaterialProduce(updateMaterialProduce, values);
      } else {
        saveMaterialProduce(insertMaterialProduce, values);
      }
    }

    function saveMaterialProduce(save, values) {
      save(values).then(() => {
        emit("success");
        closeModal();
      }).finally(() => {
        setModalProps({ confirmLoading: false });
      });
    }

    return {
      registerModal,
      registerForm,
      getTitle,
      handleSubmit
    };
  }
};
</script>
