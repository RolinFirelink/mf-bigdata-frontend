<!--
 @description: 订单数据主表
 @author: cgli
 @date: 2023-05-24
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
  import { shOrderFormSchema } from "./order.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertShOrder, updateShOrder } from "/@/api/order/Order";
  import { getCompanyOptions } from "/@/api/company/Company";

  export default {
    name: "ShOrderModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const vendorList: any = ref([]);
      const buyerList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: shOrderFormSchema,
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
      const getTitle = computed(() => (!unref(isUpdate) ? "新增订单数据主表" : "编辑订单数据主表"));

      async function setOptions() {
        // 供应商列表
        vendorList.value = await getCompanyOptions(1);
        // 销售商列表
        buyerList.value = await getCompanyOptions(2);
        updateSchema([
          {
            field: "vendorId",
            componentProps: {
              options: vendorList,
            },
          },
          {
            field: "buyerId",
            componentProps: {
              options: buyerList,
            },
          },
        ]);
      }

      async function handleSubmit() {
        let values = await validate();
        if (values.vendorId == undefined) {
          values.vendorId = 0;
          values.vendorName = "";
        }
        if (values.buyerId == undefined) {
          values.buyerId = 0;
          values.buyerName = "";
        }
        vendorList.value.forEach((item) => {
          if (item.id == values.vendorId) {
            values.vendorName = item.companyName;
          }
        });
        buyerList.value.forEach((item) => {
          if (item.id == values.buyerId) {
            values.buyerName = item.companyName;
          }
        });
        if (unref(isUpdate)) {
          saveShOrder(updateShOrder, values);
        } else {
          saveShOrder(insertShOrder, values);
        }
      }

      function saveShOrder(save, values) {
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
        vendorList,
        buyerList,
        setOptions,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
