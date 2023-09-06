<template>
  <div :class="getClass" :style="getStyle">
    <div :class="`${prefixCls}-image-wrapper`" :style="getImageWrapperStyle" @cl`ick="openModal">
      <div :class="`${prefixCls}-image-mask`" :style="getImageWrapperStyle">
        <Icon
          icon="ant-design:cloud-upload-outlined"
          :size="getIconWidth"
          :style="getImageWrapperStyle"
          color="#d6d6d6"
        />
      </div>
      <div :class="`${prefixCls}-image-mask`" :style="getImageWrapperStyle">
        <Icon
          icon="ant-design:cloud-upload-outlined"
          :size="getIconWidth"
          :style="getImageWrapperStyle"
          color="#d6d6d6"
        />
      </div>
      <img :src="sourceValue" v-if="sourceValue" alt="avatar" />
    </div>
    <a-button
      :class="`${prefixCls}-upload-btn`"
      @click="openModal"
      v-if="showBtn"
      v-bind="btnProps"
    >
      {{ btnText ? btnText : t("component.cropper.selectImage") }}
    </a-button>
    <a-button @click="delImg" style="margin-left=5px">删除图片</a-button>
    <CopperModal2
      @register="register"
      @upload-success="handleUploadSuccess"
      :uploadApi="uploadApi"
      :src="sourceValue"
      :circled="false"
    />
  </div>
</template>
<script lang="ts">
  import {
    defineComponent,
    computed,
    CSSProperties,
    unref,
    ref,
    watchEffect,
    watch,
    PropType,
  } from "vue";
  import CopperModal2 from "./CopperModal2.vue";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { useModal } from "/@/components/general/Modal";
  import { useMessage } from "/@/hooks/web/UseMessage";
  import { useI18n } from "/@/hooks/web/UseI18n";
  import type { ButtonProps } from "/@/components/general/Button";
  import { Icon } from "/@/components/general/Icon";
  import { UploadFileParams } from "/#/axios";

  const props = {
    height: { type: [String, Number] },
    width: { type: [String, Number], default: "200px" },
    value: { type: String },
    showBtn: { type: Boolean, default: true },
    btnProps: { type: Object as PropType<ButtonProps> },
    btnText: { type: String, default: "" },
    uploadApi: { type: Function as PropType<(params: UploadFileParams) => Promise<any>> },
  };

  export default defineComponent({
    name: "CropperAvatar",
    components: { CopperModal2, Icon },
    props,
    emits: ["del-img", "update:value", "change"],
    setup(props, { emit, expose }) {
      const sourceValue = ref(props.value || "");
      const { prefixCls } = useDesign("cropper-avatar");
      const [register, { openModal, closeModal }] = useModal();
      const { createMessage } = useMessage();
      const { t } = useI18n();

      const getClass = computed(() => [prefixCls]);

      const getWidth = computed(() => `${props.width}`.replace(/px/, "") + "px");

      const getHeight = computed(() => `${props.height || props.width}`.replace(/px/, "") + "px");

      const getIconWidth = computed(() => parseInt(`${props.width}`.replace(/px/, "")) / 2 + "px");

      const getStyle = computed((): CSSProperties => ({ width: unref(getWidth) }));

      const getImageWrapperStyle = computed(
        (): CSSProperties => ({ width: unref(getWidth), height: unref(getHeight) }),
      );

      watchEffect(() => {
        sourceValue.value = props.value || "";
      });

      watch(
        () => sourceValue.value,
        (v: string) => {
          emit("update:value", v);
        },
      );

      function delImg() {
        emit("del-img");
      }

      function handleUploadSuccess({ source, data }, fileUrl) {
        sourceValue.value = source;
        emit("change", { source, data }, fileUrl);
        createMessage.success(t("component.cropper.uploadSuccess"));
      }

      expose({ openModal: openModal.bind(null, true), closeModal });

      return {
        delImg,
        t,
        prefixCls,
        register,
        openModal: openModal as any,
        getIconWidth,
        sourceValue,
        getClass,
        getImageWrapperStyle,
        getStyle,
        handleUploadSuccess,
      };
    },
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-cropper-avatar";

  .@{prefix-cls} {
    display: inline-block;
    text-align: center;

    &-image-wrapper {
      overflow: hidden;
      cursor: pointer;
      background: @component-background;
      border: 1px solid @border-color-base;
      img {
        width: 100%;
      }
    }

    &-image-mask {
      opacity: 0%;
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      border: inherit;
      background: rgb(0 0 0 / 40%);
      cursor: pointer;
      transition: opacity 0.4s;
      ::v-deep(svg) {
        margin: auto;
      }
    }

    &-image-mask:hover {
      opacity: 4000%;
    }

    &-upload-btn {
      margin: 10px auto;
    }
  }
</style>
