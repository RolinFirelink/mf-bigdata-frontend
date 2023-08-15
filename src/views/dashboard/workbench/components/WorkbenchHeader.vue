<template>
  <div class="lg:flex">
    <Avatar :src="avatar" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">早安, 开始您一天的工作吧！</h1>
    </div>
    <div class="flex flex-1 justify-end" style="margin-top: -60px">
      <div id="he-plugin-standard"></div>
    </div>
  </div>
</template>
<script>
  import { onMounted, defineComponent } from "vue";
  import { Avatar } from "ant-design-vue";

  window.WIDGET = {
    CONFIG: {
      layout: "2",
      width: "200",
      height: "140",
      background: "5",
      dataColor: "000000",
      borderRadius: "1",
      language: "zh",
      key: "fc6cd73f93eb46008f5d15eb669ebdde",
    },
  };
  export default defineComponent({
    components: { Avatar },
    setup() {
      onMounted(() => {
        weather();
      });
      const weather = () => {
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
        document.body.appendChild(s);
      };
      return {};
    },
  });
</script>
