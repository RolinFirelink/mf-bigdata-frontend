<!--
 @description: 货运表
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
  import { productCirculationDataFormSchema } from "./productCirculationData.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import {
    insertProductCirculationData,
    updateProductCirculationData,
  } from "/@/api/cargo/ProductCirculationData";
  import { getCompanyOptions } from "/@/api/company/Company";
  import { listRegionByPid } from "/@/api/sys/Region";
  export default {
    name: "ProductCirculationDataModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const regionTree: any = ref([]);
      const regionOption1: any = ref([]);
      const regionOption2: any = ref([]);
      const companyList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: productCirculationDataFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        setOptions();
        setTreeData(0);
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增货运表" : "编辑货运表"));

      // 设置选项列表
      async function setOptions() {
        companyList.value = await getCompanyOptions(3);
        updateSchema([
          {
            field: "companyId",
            componentProps: {
              options: companyList.value,
            },
          },
        ]);
      }

      //地区树形数据
      async function setTreeData(parentId) {
        const data = await listRegionByPid(parentId);
        regionTree.value = data;
        updateTreeData();
      }

      function updateTreeData() {
        updateSchema([
          {
            field: "shippingLocation",
            componentProps: {
              options: regionTree.value,
              "load-data": handleExpand1,
            },
          },
          {
            field: "receivingLocation",
            componentProps: {
              options: regionTree.value,
              "load-data": handleExpand2,
            },
          },
        ]).then();
      }

      async function handleExpand1(options) {
        regionOption1.value = options;
        const value = options[options.length - 1];
        const data = (await listRegionByPid(value.id)) || [];
        if (data.length > 0) {
          regionTree.value.forEach((item) => {
            if (pushData(value.id, item, data)) {
              return;
            }
          });
        } else {
          regionTree.value.forEach((item) => {
            if (setIsLeaf(value.id, item)) {
              return;
            }
          });
        }
        updateTreeData();
      }

      async function handleExpand2(options) {
        regionOption2.value = options;
        const value = options[options.length - 1];
        const data = (await listRegionByPid(value.id)) || [];
        if (data.length > 0) {
          regionTree.value.forEach((item) => {
            if (pushData(value.id, item, data)) {
              return;
            }
          });
        } else {
          regionTree.value.forEach((item) => {
            if (setIsLeaf(value.id, item)) {
              return;
            }
          });
        }
        updateTreeData();
      }

      function setIsLeaf(id, node) {
        if (node.id === id) {
          node.isLeaf = true;
          return true;
        }
        if (node.children) {
          node.children.forEach((item) => {
            setIsLeaf(id, item);
          });
        }
        return false;
      }

      function pushData(id, node, data) {
        if (node.id === id) {
          node.children = data;
          return true;
        }
        if (node.children) {
          node.children.forEach((item) => {
            return pushData(id, item, data);
          });
        }
        return false;
      }

      async function handleSubmit() {
        let values = await validate();
        values.shippingLocation =
          regionOption1.value[regionOption1.value.length - 1].pidsName + values.detail1;
        values.receivingLocation =
          regionOption2.value[regionOption2.value.length - 1].pidsName + values.detail2;
        values.detail = undefined;
        values.detial2 = undefined;
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveProductCirculationData(updateProductCirculationData, values);
        } else {
          saveProductCirculationData(insertProductCirculationData, values);
        }
      }

      function saveProductCirculationData(save, values) {
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
        regionOption1,
        regionOption2,
        setTreeData,
        handleExpand1,
        handleExpand2,
        setOptions,
        companyList,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
