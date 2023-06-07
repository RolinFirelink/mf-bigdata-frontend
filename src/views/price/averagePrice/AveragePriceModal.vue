<!--
 @description: 均价表
 @author: cgli
 @date: 2023-05-30
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
  import { shAveragePriceFormSchema } from "./averagePrice.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertAveragePrice, updateAveragePrice } from "/@/api/price/AveragePrice";
  import { getMaterialOptions } from "/@/api/product/Material";
  export default {
    name: "ShAveragePriceModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const materialList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: shAveragePriceFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        setOptions();
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增均价表" : "编辑均价表"));

      async function setOptions() {
        materialList.value = (await getMaterialOptions()) || [];
        updateSchema([
          {
            field: "materialId",
            componentProps: {
              options: materialList.value,
            },
          },
        ]);
      }

      async function handleSubmit() {
        let values = await validate();
        materialList.value.forEach((item) => {
          if (values.materialId == item.id) {
            values.materialName = item.name;
            return;
          }
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveShAveragePrice(updateAveragePrice, values);
        } else {
          saveShAveragePrice(insertAveragePrice, values);
        }
      }

      function saveShAveragePrice(save, values) {
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
        materialList,
        setOptions,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
