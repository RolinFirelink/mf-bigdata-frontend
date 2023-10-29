<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 14:31:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 18:41:33
 * @FilePath: \mf-bigdata-frontend\src\views\analyse\product-base-day-data\ProductBaseDayDataModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 产品基地每日数据
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
  import { productBaseDayDataFormSchema } from "./productBaseDayData.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertProductBaseDayData,
    updateProductBaseDayData,
  } from "/@/api/analyse/ProductBaseDayData";
  import { getMaterialOptions } from "/@/api/product/Material";
  import { getProductBaseOptions } from "/@/api/company/ProductBase";

  export default {
    name: "ProductBaseDayDataModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      // 基地列表
      const baseList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: productBaseDayDataFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setOptions(data.record ? data.record.flag : null);
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() =>
        !unref(isUpdate) ? "新增产品基地每日数据" : "编辑产品基地每日数据",
      );

      async function setOptions(flag) {
        const baseNameList = await getProductBaseOptions();
        baseList.value = await getProductBaseOptions({ flag });
        const materialList = await getMaterialOptions({ flag });
        updateSchema([
          {
            field: "flag",
            componentProps: { onChange: changeProduct },
          },
          {
            field: "baseId",
            componentProps: { options: baseList.value },
          },
          {
            field: "baseName",
            componentProps: { options: baseNameList },
          },
          {
            field: "product",
            componentProps: { options: materialList },
          },
        ]);
      }
      function changeProduct(value) {
        console.log(value);
        setOptions(value);
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
          saveProductBaseDayData(updateProductBaseDayData, values);
        } else {
          saveProductBaseDayData(insertProductBaseDayData, values);
        }
      }

      function saveProductBaseDayData(save, values) {
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
        setOptions,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
