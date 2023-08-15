<template>
  <Card title="云图链接" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">
        <a href="https://www.12221.com.cn/#/nephogram" target="_blank">更多</a>
      </a-button>
    </template>
    <div class="list">
      <CardGrid v-for="item in consultationList" :key="item.id" class="!md:w-1/4 !w-full">
        <ContentItem :item-data="item" class="content" />
      </CardGrid>
    </div>
  </Card>
</template>
<script lang="ts">
  import ContentItem from "./ContentItem.vue";
  import { ref } from "vue";
  import { Card, CardGrid } from "ant-design-vue";

  export default {
    components: { Card, CardGrid, ContentItem },
    setup() {
      const consultationList = ref([
        {
          name: "柑橘云图一",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/ganju1.png",
          path: "https://www.12221.com.cn/#/charts/ganju1",
        },
        {
          name: "柑橘云图二",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/ganju2.png",
          path: "https://www.12221.com.cn/#/charts/ganju2",
        },
        {
          name: "菜心云图一",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/caixin1.png",
          path: "https://www.12221.com.cn/#/charts/caixin1",
        },
        {
          name: "菜心云图二",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/caixin2.png",
          path: "https://www.12221.com.cn/#/charts/caixin2",
        },
      ]);
      return { consultationList };
    },
  };
</script>
<style lang="less" scoped>
  * {
    box-sizing: border-box;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .upper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .title {
    margin-right: auto;
  }

  .mainTitle {
    font-size: 23px;
    font-weight: bold;
    color: #333;
    position: relative;
    text-align: center;
  }

  .redBox {
    width: 46px;
    height: 21px;
    font-size: 20px;
    background-color: red;
    margin-top: -100px;
    margin-left: 5px;
    display: inline-block;
  }

  .redBox span {
    color: aliceblue;
    font-size: 12px;
    font-weight: 16px;
  }

  .moreInfo {
    cursor: pointer;
    text-decoration: none;
    color: gray;
  }

  .list {
    display: flex;
    flex-wrap: nowrap;

    .home-item {
      width: 200px;
      margin: 0 auto;
      background-color: #ffffff;
      float: left;
      justify-content: center;
    }
  }
</style>
