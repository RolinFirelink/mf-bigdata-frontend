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
  import { getCompanyOptions } from "/@/api/company/Company";
  import { getMaterialOptions } from "/@/api/product/Material";
  import { getProductBaseOptions } from "/@/api/company/ProductBase";
  export default {
    name: "MaterialProduceModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      // 产品列表
      const materialList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: materialProduceFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品生产表" : "编辑产品生产表"));

      async function setOptions() {
        // 获取供应商列表
        const companyList = await getCompanyOptions(1);
        // 获取产品列表
        materialList.value = await getMaterialOptions();
        // 获取基地列表
        const productBaseList = await getProductBaseOptions();
        updateSchema([
          {
            field: "companyId",
            componentProps: { options: companyList },
          },
          {
            field: "materialId",
            componentProps: { options: materialList.value },
          },
          {
            field: "baseId",
            componentProps: { options: productBaseList },
          },
        ]);
      }

      async function handleSubmit() {
        let values = await validate();
        materialList.value.forEach((item) => {
          if (item.id === values.materialId) {
            return (values.name = item.name);
          }
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveMaterialProduce(updateMaterialProduce, values);
        } else {
          saveMaterialProduce(insertMaterialProduce, values);
        }
      }

      function saveMaterialProduce(save, values) {
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
