<!--
 @description: 产品基地
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
  import { productBaseFormSchema } from "./productBase.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertProductBase, updateProductBase } from "/@/api/company/ProductBase";
  import { getCompanyOptions } from "/@/api/company/Company";
  import { listRegionByPid } from "/@/api/sys/Region";

  export default {
    name: "ProductBaseModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const regionTree: any = ref([]);
      const regionOption: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: productBaseFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setListData();
        setTreeData(0);
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品基地" : "编辑产品基地"));

      // 获取并设置供应商列表数据
      async function setListData() {
        const companyList = await getCompanyOptions(1);
        updateSchema([
          {
            field: "companyId",
            componentProps: { options: companyList },
          },
        ]).then();
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
            field: "address",
            componentProps: {
              options: regionTree.value,
              "load-data": handleExpand,
            },
          },
        ]).then();
      }

      async function handleExpand(options) {
        regionOption.value = options;
        const value = options[options.length - 1];
        // regionOption.value = value;
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
        const lastRegion = regionOption.value[regionOption.value.length - 1];
        values.areaCode = lastRegion.code;
        values.areaName = lastRegion.name;
        values.address = lastRegion.pidsName + values.detail;
        values.detail = undefined;
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveProductBase(updateProductBase, values);
        } else {
          saveProductBase(insertProductBase, values);
        }
      }

      function saveProductBase(save, values) {
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
        regionOption,
        setTreeData,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
