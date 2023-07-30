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
  // import { getDictItems } from "/@/api/sys/DictItem";
  export default {
    name: "CompanyModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const regionList: any = ref([]);
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
        load(0, 0);
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
      const load = async (pid, index) => {
        regionList.value[index] = await listRegionByPid(pid);
        updateSchema([
          {
            field: "country",
            componentProps: {
              options: regionList.value[0],
              onSelect: test1,
            },
          },
          {
            field: "province",
            componentProps: {
              options: regionList.value[1],
              onSelect: test2,
            },
          },
          {
            field: "city",
            componentProps: {
              options: regionList.value[2],
              onSelect: test3,
            },
          },
          {
            field: "area",
            componentProps: {
              options: regionList.value[3],
              onSelect: test4,
            },
          },
          {
            field: "street",
            componentProps: {
              options: regionList.value[4],
            },
          },
        ]).then();
      };

      const test1 = async (value) => {
        load(value, 1);
      };
      const test2 = async (value) => {
        load(value, 2);
      };
      const test3 = async (value) => {
        load(value, 3);
      };
      const test4 = async (value) => {
        load(value, 4);
      };
      async function handleSubmit() {
        let values = await validate();
        if (values.country) {
          //选择了国家
          values.areaCode = values.country;
          values.country = undefined;
          if (values.province) {
            //选择了省份
            values.areaCode = values.province;
            values.province = undefined;
            if (values.city) {
              values.areaCode = values.city;
              values.city = undefined;
              if (values.area) {
                values.areaCode = values.area;
                values.area = undefined;
                if (values.street) {
                  values.areaCode = values.street;
                  values.street = undefined;
                }
              }
            }
          }
        }

        // console.log(values);
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
        regionList,
        load,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
