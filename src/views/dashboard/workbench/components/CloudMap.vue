<template>
  <Card title="云图链接" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">
        <a href="https://www.12221.com.cn/#/nephogram" target="_blank">更多</a>
      </a-button>
    </template>
    <div class="list">
      <CardGrid v-for="item in consultationList" :key="item.id" class="!md:w-1/3 !w-full">
        <ContentItem :item-data="item" class="home-item" />
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
          name: "柑橘云图",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/ganju1.png",
          path: "https://www.12221.com.cn/#/charts/ganju1",
        },
        {
          name: "兰花云图",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/orchid1.png",
          path: "https://www.12221.com.cn/#/charts/orchiid1",
        },
        {
          name: "海洋牧场(金鲳鱼)云图",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/fish1.png",
          path: "https://www.12221.com.cn/#/charts/fish1",
        },
        {
          name: "蔬菜(菜心)云图",
          article:
            "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
          imgUrl: "/images/charts/caixin1.png",
          path: "https://www.12221.com.cn/#/charts/caixin1",
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
      object-fit: cover;
      width: 100%;
      height: auto;
      margin: 0 auto;
      background-color: #ffffff;
      float: left;
      justify-content: center;
    }
  }
</style>
