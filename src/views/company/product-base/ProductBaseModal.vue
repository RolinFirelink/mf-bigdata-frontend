<!--
 @description: 产品基地
 @author: cgli
 @date: 2023-05-24
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <CropperImage
      :uploadApi="uploadApi"
      @del-img="imgUrl = ''"
      :value="imgUrl"
      :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
      @change="updateImg"
      width="300"
      height="150"
    />
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
  import { getDictItems } from "/@/api/sys/DictItem";
  import { imageUrl } from "/@/utils/FileUtils";
  import { getLocalFileUrl } from "/@/api/storage/SysFile";
  import { uploadApi } from "/@/api/storage/Upload";
  import { CropperImage } from "/@/components/general/Cropper";
  import { listRegionByPid, getRegionById } from "/@/api/sys/Region";
  export default {
    name: "ProductBaseModal",
    components: { BasicModal, BasicForm, CropperImage },
    emits: ["success", "register"],
    setup(_, { emit }) {
      //图片地址
      const imgUrl = ref("");
      const regionList: any = ref([]);
      const attestationList: any = ref([]);
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
        imgUrl.value = "";
        //加载地址
        load(0, 0);
        //设置公司列表
        setCompanyList();
        //设置认证情况列表
        setAttestation();
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
          if (data.record.attestation) {
            const dictCodeList = data.record.attestation.split(";");
            data.record.attestation = dictCodeList.map((item) => {
              return Number(item);
            });
          } else {
            data.record.attestation = [];
          }
          imgUrl.value = data.record.img;
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增产品基地" : "编辑产品基地"));

      function updateImg({ data }, fileUrl) {
        console.log(data, fileUrl);
        imgUrl.value = fileUrl;
      }

      // 获取并设置供应商列表数据
      async function setCompanyList() {
        const companyList = await getCompanyOptions(1);
        updateSchema([
          {
            field: "companyId",
            componentProps: { options: companyList },
          },
        ]).then();
      }

      // 设置认证类型列表
      async function setAttestation() {
        attestationList.value = await getDictItems("mk_attestation");
        updateSchema([
          {
            field: "attestation",
            componentProps: { options: attestationList.value },
          },
        ]).then();
      }

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
        console.log("values", values);
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
        values.attestation = values.attestation.join(";");
        values.img = imgUrl.value;
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
        imageUrl,
        getLocalFileUrl,
        uploadApi,
        attestationList,
        regionList,
        imgUrl,
        load,
        updateImg,
        setAttestation,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
