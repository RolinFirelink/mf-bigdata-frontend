<!--
 @description: 报表页面
 @author: cgli
 @date: 2023-05-31
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
  import { reportFormSchema } from "./cloudMap.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertCloudMap, updateCloudMap } from "/@/api/report/CloudMap";
  import { uploadApi } from "/@/api/storage/Upload";
  import { CropperImage } from "/@/components/general/Cropper";
  import { imageUrl } from "/@/utils/FileUtils";
  import { getLocalFileUrl } from "/@/api/storage/SysFile";
  export default {
    name: "ReportModal",
    components: { BasicModal, BasicForm, CropperImage },
    emits: ["success", "register"],
    setup(_, { emit }) {
      //图片地址
      const imgUrl = ref("");
      const isUpdate = ref(true);
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 12 },
        schemas: reportFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true,
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "800px" });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          imgUrl.value = data.record.imgUrl;
          setFieldsValue({
            ...data.record,
          }).then();
        }
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增报表页面" : "编辑报表页面"));

      function updateImg({ data }, fileUrl) {
        console.log(data, fileUrl);
        imgUrl.value = fileUrl;
      }

      async function handleSubmit() {
        let values = await validate();
        values.imgUrl = imgUrl.value;
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveReport(updateCloudMap, values);
        } else {
          saveReport(insertCloudMap, values);
        }
      }

      function saveReport(save, values) {
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
