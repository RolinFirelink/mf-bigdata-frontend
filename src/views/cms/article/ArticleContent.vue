<template>
  <div style="border: 1px solid #ccc" v-if="editorVisible">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
      @on-change="handleChanged"
    />
  </div>
</template>

<script>
  import "@wangeditor/editor/dist/css/style.css"; // 引入 css
  import { onBeforeUnmount, ref, shallowRef } from "vue";
  import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
  import { getArticleContent } from "/@/api/cms/Article";
  import { uploadApi } from "/@/api/storage/Upload";
  export default {
    components: { Editor, Toolbar },

    setup() {
      const editorVisible = ref(false);

      // 编辑器实例，必须用 shallowRef
      const editorRef = shallowRef();

      // 内容 HTML
      const valueHtml = ref("");

      const toolbarConfig = {};
      const editorConfig = { placeholder: "请输入内容...", MENU_CONF: {} };
      editorConfig.MENU_CONF["uploadImage"] = {
        // 自定义选择图片
        async customUpload(file, insertFn) {
          const data = await uploadApi({
            file: file,
            fileName: file.name,
            isPrivate: 0,
            path: "article",
          });
          insertFn(data.fileUrl, data.fileName, data.fileUrl);
        },
      };

      // 组件销毁时，也及时销毁编辑器
      onBeforeUnmount(() => {
        const editor = editorRef.value;
        if (editor == null) return;
        editor.destroy();
      });

      const handleCreated = (editor) => {
        editorRef.value = editor; // 记录 editor 实例，重要！
      };

      const handleChanged = (editor) => {
        valueHtml.value = editor.getHtml();
      };

      const show = () => {
        editorVisible.value = true;
      };

      async function getContent(id) {
        const content = await getArticleContent(id);
        if (isEncoded(content)) {
          valueHtml.value = decodeURIComponent(content);
        } else {
          valueHtml.value = content;
        }
      }
      function isEncoded(str) {
        try {
          decodeURIComponent(str);
          return true;
        } catch (e) {
          return false;
        }
      }

      function closeEdit() {
        editorVisible.value = false;
      }

      const clearContent = () => {
        valueHtml.value = "";
      };

      return {
        closeEdit,
        editorRef,
        valueHtml,
        mode: "default", // 或 'simple'
        toolbarConfig,
        editorConfig,
        handleCreated,
        getContent,
        editorVisible,
        clearContent,
        show,
        handleChanged,
      };
    },
  };
</script>
<style scoped>
  .w-e-text-container {
    height: 700px !important; /*!important是重点，因为原div是行内样式设置的高度300px*/
  }
</style>
