<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-18 11:28:22
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 11:49:42
 * @FilePath: \mf-bigdata-frontend\src\views\data\place-of-sale\PlaceOfSaleModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 销售地表
 @author: cgli
 @date: 2023-08-18
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
  import { placeOfSaleFormSchema } from "./placeOfSale.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertPlaceOfSale, updatePlaceOfSale } from "/@/api/data/PlaceOfSale";
  import { listRegionByPid, getRegionById } from "/@/api/sys/Region";

  export default {
    name: "PlaceOfSaleModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const regionList: any = ref([]);
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: placeOfSaleFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        load(0, 0);
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          if (data.record.areaCode) {
            const pids = getRegionData(data.record.areaCode);
            const pidList = (await pids).split(",");
            pidList.forEach((item) => {
              console.log(item);
            });
            data.record.country = pidList[0];
            load(data.record.country, 1);
            data.record.province = pidList[1];
            load(data.record.province, 2);
            data.record.city = pidList[2];
            load(data.record.city, 3);
            data.record.area = pidList[3];
            load(data.record.area, 4);
            data.record.street = pidList[4];
          }
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增销售地表" : "编辑销售地表"));

      const getRegionData = async (id) => {
        const data = await getRegionById(id);
        return data.pids;
      };

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
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          savePlaceOfSale(updatePlaceOfSale, values);
        } else {
          savePlaceOfSale(insertPlaceOfSale, values);
        }
      }

      function savePlaceOfSale(save, values) {
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
        getRegionData,
        load,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
