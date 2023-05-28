<!--
 @description: 产品品牌表
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
  import { materialBrandRecordFormSchema } from "./materialBrandRecord.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertMaterialBrandRecord,
    updateMaterialBrandRecord,
  } from "/@/api/product/MaterialBrandRecord";
  import { getMaterialBrandOptions } from "/@/api/product/MaterialBrand";
  import { getMaterialOptions } from "/@/api/product/Material";

  export default {
    name: "MaterialBrandModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      // 公司列表
      const companyList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: materialBrandRecordFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品品牌表" : "编辑产品品牌表"));

      async function setOptions() {
        const brandList = await getMaterialBrandOptions();
        const materialList = await getMaterialOptions();
        companyList.value = brandList;
        updateSchema([
          {
            field: "brandId",
            componentProps: { options: companyList },
          },
          {
            field: "materialId",
            componentProps: { options: materialList },
          },
        ]).then();
      }

      async function handleSubmit() {
        let values = await validate();
        companyList.value.forEach((item) => {
          if (item.id === values.companyId) {
            values.companyName = item.companyName;
            return;
          }
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveMaterialBrand(updateMaterialBrandRecord, values);
        } else {
          saveMaterialBrand(insertMaterialBrandRecord, values);
        }
      }

      function saveMaterialBrand(save, values) {
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
        companyList,
        setOptions,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
