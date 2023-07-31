<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 18:03:20
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 18:12:49
 * @FilePath: \mf-bigdata-frontend\src\views\analyse\sales-flow\SalesFlowModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 销售流向
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
  import { salesFlowFormSchema } from "./salesFlow.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertSalesFlow, updateSalesFlow } from "/@/api/analyse/SalesFlow";

  export default {
    name: "SalesFlowModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: salesFlowFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增销售流向" : "编辑销售流向"));

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveSalesFlow(updateSalesFlow, values);
        } else {
          saveSalesFlow(insertSalesFlow, values);
        }
      }

      function saveSalesFlow(save, values) {
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
