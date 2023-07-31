<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-11 09:46:08
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 15:51:30
 * @FilePath: \mf-bigdata-frontend\src\views\company\produce-info\ProduceInfoModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 企业生产信息表
 @author: cgli
 @date: 2023-07-11
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
  import { produceInfoFormSchema } from "./produceInfo.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertProduceInfo, updateProduceInfo } from "/@/api/company/ProduceInfo";
  import { getCompanyOptions } from "/@/api/company/Company";

  export default {
    name: "ProduceInfoModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const companyList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: produceInfoFormSchema,
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
        !unref(isUpdate) ? "新增企业生产信息表" : "编辑企业生产信息表",
      );

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
          saveProduceInfo(updateProduceInfo, values);
        } else {
          saveProduceInfo(insertProduceInfo, values);
        }
      }

      function saveProduceInfo(save, values) {
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
