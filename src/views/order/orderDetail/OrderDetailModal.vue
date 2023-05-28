<!--
 @description: 订单数据明细表
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
  import { orderDetailFormSchema } from "./orderDetail.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertOrderDetail, updateOrderDetail } from "/@/api/order/OrderDetail";
  import { getMaterialOptions } from "/@/api/product/Material";

  export default {
    name: "OrderDetailModal",
    components: { BasicModal, BasicForm },
    props: { orderId: String },
    emits: ["success", "register"],
    setup(props, { emit }) {
      // 产品列表
      const materialList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: orderDetailFormSchema,
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
      const getTitle = computed(() =>
        !unref(isUpdate) ? "新增订单数据明细表" : "编辑订单数据明细表",
      );

      async function setOptions() {
        materialList.value = await getMaterialOptions();
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
          if (item.id == values.materialId) {
            return (values.materialName = item.name);
          }
        });
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveOrderDetail(updateOrderDetail, values);
        } else {
          values.orderId = props.orderId;
          saveOrderDetail(insertOrderDetail, values);
        }
      }

      function saveOrderDetail(save, values) {
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
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
