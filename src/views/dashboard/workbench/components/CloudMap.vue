<template>
  <Card title="云图链接" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <div class="container">
      <div class="content-wrapper">
        <div class="list">
          <CardGrid v-for="item in consultationList" :key="item.id" class="!md:w-1/4 !w-full">
            <ContentItem :item-data="item" />
          </CardGrid>
        </div>
      </div>
    </div>
  </Card>
</template>
<script setup>
  import ContentItem from "./ContentItem.vue";
  import { ref } from "vue";
  import { Card, CardGrid } from "ant-design-vue";
  // import { getReportList } from "@/api/report";

  const consultationList = ref([
    {
      name: "柑橘云图一",
      article:
        "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
      imgUrl: "/images/charts/ganju1.png",
      path: "/charts/ganju1",
    },
    {
      name: "柑橘云图二",
      article:
        "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
      imgUrl: "/images/charts/ganju2.png",
      path: "/charts/ganju2",
    },
    {
      name: "菜心云图一",
      article:
        "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
      imgUrl: "/images/charts/caixin1.png",
      path: "/charts/caixin1",
    },
    {
      name: "菜心云图二",
      article:
        "数字化管理，实时掌握各品种分布情况以及动态数据信息，方便根据实际情况做动态数据调整。",
      imgUrl: "/images/charts/caixin2.png",
      path: "/charts/caixin2",
    },
  ]);

  // onMounted(() => {
  //   setData();
  // });

  // const setData = async () => {
  //   const data = await getReportList(0, "");
  //   if (data && data.length >= 4) {
  //     for (let i = 0; i < 4; i++) {
  //       consultationList.value[i] = data[i];
  //     }
  //   }
  // };
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
      width: 255px;
      height: 290px;
      background-color: #ffffff;
      margin-right: 20px;
      float: left;
    }
    .home-item:last-child {
      margin-right: 0px;
    }
  }

  @media only screen and (max-width: 767px) {
    .container {
      width: 95%;
      margin: 0 auto;
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
      margin-left: 5px;
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
      margin-right: 2%;
    }

    .moreInfo a {
      text-decoration: none;
      font-size: 18px;
      color: gray;
    }

    .list {
      width: 95%;
      margin: 10px auto;
      overflow: hidden;
      flex-wrap: wrap;
      .home-item {
        width: 100%;
        height: 350px;
        margin: 0 0 15px 0;
      }
    }
  }
</style>
