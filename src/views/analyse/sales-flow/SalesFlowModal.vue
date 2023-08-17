<!--
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 18:03:20
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-17 13:23:30
 * @FilePath: \mf-bigdata-frontend\src\views\analyse\sales-flow\SalesFlowModal.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 @description: 销售流向
 @author: cgli
 @date: 2023-07-20
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
  import { salesFlowFormSchema } from "./salesFlow.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertSalesFlow, updateSalesFlow } from "/@/api/analyse/SalesFlow";
  import { listRegionByPid, getRegionById } from "/@/api/sys/Region";

  export default {
    name: "SalesFlowModal",
    components: { BasicModal, BasicForm },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const startRegionList: any = ref([]);
      const endRegionList: any = ref([]);
      const [registerForm, { resetFields, setFieldsValue, validate, updateSchema }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: salesFlowFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        //加载地址
        startLoad(0, 0);
        endLoad(0, 0);
        if (unref(isUpdate)) {
          if (data.record.startAreaCode) {
            const startPids = getRegionData(data.record.startAreaCode);
            const startPidList = (await startPids).split(",");
            startPidList.forEach((item) => {
              console.log(item);
            });
            data.record.startCountry = startPidList[0];
            startLoad(data.record.startCountry, 1);
            data.record.startProvince = startPidList[1];
            startLoad(data.record.startProvince, 2);
            data.record.startCity = startPidList[2];
            startLoad(data.record.startCity, 3);
            data.record.startArea = startPidList[3];
            startLoad(data.record.startArea, 4);
            data.record.startStreet = startPidList[4];
          }
          if (data.record.endAreaCode) {
            const endPids = getRegionData(data.record.endAreaCode);
            const endPidList = (await endPids).split(",");
            endPidList.forEach((item) => {
              console.log(item);
            });
            data.record.endCountry = endPidList[0];
            endLoad(data.record.endCountry, 1);
            data.record.endProvince = endPidList[1];
            endLoad(data.record.endProvince, 2);
            data.record.endCity = endPidList[2];
            endLoad(data.record.endCity, 3);
            data.record.endArea = endPidList[3];
            endLoad(data.record.endArea, 4);
            data.record.endStreet = endPidList[4];
          }
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增销售流向" : "编辑销售流向"));

      const getRegionData = async (id) => {
        const data = await getRegionById(id);
        return data.pids;
      };

      const startLoad = async (pid, index) => {
        startRegionList.value[index] = await listRegionByPid(pid);
        updateSchema([
          {
            field: "startCountry",
            componentProps: {
              options: startRegionList.value[0],
              onSelect: test1,
            },
          },
          {
            field: "startProvince",
            componentProps: {
              options: startRegionList.value[1],
              onSelect: test2,
            },
          },
          {
            field: "startCity",
            componentProps: {
              options: startRegionList.value[2],
              onSelect: test3,
            },
          },
          {
            field: "startArea",
            componentProps: {
              options: startRegionList.value[3],
              onSelect: test4,
            },
          },
          {
            field: "startStreet",
            componentProps: {
              options: startRegionList.value[4],
            },
          },
        ]).then();
      };

      const endLoad = async (pid, index) => {
        endRegionList.value[index] = await listRegionByPid(pid);
        updateSchema([
          {
            field: "endCountry",
            componentProps: {
              options: endRegionList.value[0],
              onSelect: test5,
            },
          },
          {
            field: "endProvince",
            componentProps: {
              options: endRegionList.value[1],
              onSelect: test6,
            },
          },
          {
            field: "endCity",
            componentProps: {
              options: endRegionList.value[2],
              onSelect: test7,
            },
          },
          {
            field: "endArea",
            componentProps: {
              options: endRegionList.value[3],
              onSelect: test8,
            },
          },
          {
            field: "endStreet",
            componentProps: {
              options: endRegionList.value[4],
            },
          },
        ]).then();
      };

      const test1 = async (value) => {
        startLoad(value, 1);
      };
      const test2 = async (value) => {
        startLoad(value, 2);
      };
      const test3 = async (value) => {
        startLoad(value, 3);
      };
      const test4 = async (value) => {
        startLoad(value, 4);
      };

      const test5 = async (value) => {
        endLoad(value, 1);
      };
      const test6 = async (value) => {
        endLoad(value, 2);
      };
      const test7 = async (value) => {
        endLoad(value, 3);
      };
      const test8 = async (value) => {
        endLoad(value, 4);
      };

      async function handleSubmit() {
        let values = await validate();
        // console.log("values", values);
        if (values.startCountry) {
          //选择了国家
          values.startAreaCode = values.startCountry;
          values.country = undefined;
          if (values.startProvince) {
            //选择了省份
            values.startAreaCode = values.startProvince;
            values.startProvince = undefined;
            if (values.startCity) {
              values.startAreaCode = values.startCity;
              values.startCity = undefined;
              if (values.startArea) {
                values.startAreaCode = values.startArea;
                values.startArea = undefined;
                if (values.startStreet) {
                  values.startAreaCode = values.startStreet;
                  values.startStreet = undefined;
                }
              }
            }
          }
        }
        if (values.endCountry) {
          //选择了国家
          values.endAreaCode = values.endCountry;
          values.country = undefined;
          if (values.endProvince) {
            //选择了省份
            values.endAreaCode = values.endProvince;
            values.endProvince = undefined;
            if (values.endCity) {
              values.endAreaCode = values.endCity;
              values.endCity = undefined;
              if (values.endArea) {
                values.endAreaCode = values.endArea;
                values.endArea = undefined;
                if (values.endStreet) {
                  values.endAreaCode = values.endStreet;
                  values.endStreet = undefined;
                }
              }
            }
          }
        }
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveSalesFlow(updateSalesFlow, values);
        } else {
          saveSalesFlow(insertSalesFlow, values);
        }
      }

      function saveSalesFlow(save, values) {
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
        startRegionList,
        startLoad,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
