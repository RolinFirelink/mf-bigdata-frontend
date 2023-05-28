<!--
 @description: 产品表
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
  import { materialFormSchema } from "./material.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertMaterial, updateMaterial } from "/@/api/product/Material";
  import { getListByParentId } from "/@/api/product/MaterialCategory";

  export default {
    name: "MaterialModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      // 产品分类树形列表
      let categoryTreeData: any = [];
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: materialFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        setTreeData(0);
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品表" : "编辑产品表"));

      //产品分类树数据
      async function setTreeData(parentId) {
        const data = await getListByParentId(parentId);
        categoryTreeData = data;
        updateTreeData();
      }

      function updateTreeData() {
        updateSchema([
          {
            field: "categoryId",
            componentProps: {
              treeData: categoryTreeData,
              "load-data": getChildrenData,
            },
          },
        ]).then();
      }

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        if (!values.categoryId) {
          values.categoryId = 0;
        }
        if (unref(isUpdate)) {
          saveMaterial(updateMaterial, values);
        } else {
          saveMaterial(insertMaterial, values);
        }
      }

      function saveMaterial(save, values) {
        save(values)
          .then(() => {
            emit("success");
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }

      async function getChildrenData(value) {
        const data = await getListByParentId(value.id);
        if (data.length > 0) {
          categoryTreeData.forEach((item) => {
            if (pushData(value.id, item, data)) {
              return;
            }
          });
        }
        updateTreeData();
      }

      function pushData(id, node, data) {
        if (node.id === id) {
          node.children = data;
          console.log(data);
          return true;
        }
        node.children.forEach((item) => {
          if (pushData(id, item, data)) {
            return;
          }
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
