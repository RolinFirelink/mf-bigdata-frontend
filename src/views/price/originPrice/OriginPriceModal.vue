<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-10 20:24:00
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-11 15:08:20
 * @FilePath: \mf-bigdata-frontend\src\views\price\origin-price\OriginPriceModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 产地价格
 @author: cgli
 @date: 2023-07-10
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
  import { originPriceFormSchema } from "./originPrice.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertOriginPrice, updateOriginPrice } from "/@/api/price/OriginPrice";
  import { getCompanyOptions } from "/@/api/company/Company";

  export default {
    name: "OriginPriceModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const companyList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: originPriceFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产地价格" : "编辑产地价格"));

      async function setOptions() {
        // 获取供应商列表
        const companyList = await getCompanyOptions(1);
        updateSchema([
          {
            field: "companyId",
            componentProps: {
              options: companyList,
            },
          },
        ]);
      }

      async function handleSubmit() {
        let values = await validate();
        companyList.value.forEach((item) => {
          if (item.id === values.companyId) {
            return (values.companyName = item.name);
          }
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveOriginPrice(updateOriginPrice, values);
        } else {
          saveOriginPrice(insertOriginPrice, values);
        }
      }

      function saveOriginPrice(save, values) {
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
        registerModal,
        setOptions,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
