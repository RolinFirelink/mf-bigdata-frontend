<!--
 @description: 热词表
 @author: cgli
 @date: 2023-07-16
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
  import { hotWordFormSchema } from "./hotWord.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertHotWord, updateHotWord } from "/@/api/analyse/HotWord";
  import { getDictItems } from "/@/api/sys/DictItem";

  export default {
    name: "HotWordModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const flagsList: any = ref([]);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: hotWordFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setFlags();
        if (unref(isUpdate)) {
          if (data.record.flags) {
            const dictCodeList = data.record.flags.split(";");
            data.record.flags = dictCodeList.map((item) => {
              return Number(item);
            });
          } else {
            data.record.flags = [];
          }
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增热词表" : "编辑热词表"));

      async function setFlags() {
        flagsList.value = await getDictItems("mk_product_type");
        updateSchema([
          {
            field: "flags",
            componentProps: { options: flagsList.value },
          },
        ]).then();
      }

      async function handleSubmit() {
        let values = await validate();
        values.flags = values.flags.join(";");
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveHotWord(updateHotWord, values);
        } else {
          saveHotWord(insertHotWord, values);
        }
      }

      function saveHotWord(save, values) {
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
        flagsList,
        registerModal,
        registerForm,
        setFlags,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
