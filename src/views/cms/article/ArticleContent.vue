<template>
  <div style="border: 1px solid #ccc">
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

  export default {
    components: { Editor, Toolbar },

    setup() {
      const editorVisible = ref(false);

      // 编辑器实例，必须用 shallowRef
      const editorRef = shallowRef();

      // 内容 HTML
      const valueHtml = ref("");

      const toolbarConfig = {};
      const editorConfig = { placeholder: "请输入内容..." };

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
        valueHtml.value = decodeURIComponent((await getArticleContent(id)) || "");
      }

      const closeEditor = () => {
        editorVisible.value = false;
        const editor = editorRef.value;
        if (editor == null) return;
        editor.destroy();
      };

      return {
        editorRef,
        valueHtml,
        mode: "default", // 或 'simple'
        toolbarConfig,
        editorConfig,
        handleCreated,
        getContent,
        editorVisible,
        closeEditor,
        show,
        handleChanged,
      };
    },
  };
</script>
