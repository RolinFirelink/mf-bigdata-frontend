<!--
 @description: 企业、供货商、销售商和承运商
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
  import { companyFormSchema } from "./company.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertCompany, updateCompany } from "/@/api/company/Company";
  import { listRegionByPid } from "/@/api/sys/Region";

  export default {
    name: "CompanyModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const regionTree: any = ref([]);
      const regionOption: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: companyFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        setTreeData(0);
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() =>
        !unref(isUpdate) ? "新增企业、供货商、销售商和承运商" : "编辑企业、供货商、销售商和承运商",
      );

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
          saveCompany(updateCompany, values);
        } else {
          saveCompany(insertCompany, values);
        }
      }

      function saveCompany(save, values) {
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
        handleExpand,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
