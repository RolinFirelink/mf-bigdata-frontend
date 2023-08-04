<!--
 @description: 轮播图图片
 @author: cgli
 @date: 2023-06-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <CropperImage
      :uploadApi="uploadApi"
      :value="imageUrl(getLocalFileUrl(imgUrl))"
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
  import { rotationChartFormSchema } from "./rotationChart.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertRotationChart, updateRotationChart } from "/@/api/miniProgram/RotationChart";
  import { uploadApi } from "/@/api/storage/Upload";
  import { CropperImage } from "/@/components/general/Cropper";
  import { imageUrl } from "/@/utils/FileUtils";
  import { getLocalFileUrl } from "/@/api/storage/SysFile";
  export default {
    name: "RotationChartModal",
    components: { BasicModal, BasicForm, CropperImage },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const imgUrl = ref("");
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: rotationChartFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增轮播图图片" : "编辑轮播图图片"));

      function updateImg({ data }) {
        console.log(data);
        imgUrl.value = data;
      }

      async function handleSubmit() {
        let values = await validate();
        setModalProps({ confirmLoading: true });
        values.imgUrl = imgUrl.value;
        if (unref(isUpdate)) {
          saveRotationChart(updateRotationChart, values);
        } else {
          saveRotationChart(insertRotationChart, values);
        }
      }

      function saveRotationChart(save, values) {
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
        imgUrl,
        uploadApi,
        updateImg,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
      };
    },
  };
</script>
