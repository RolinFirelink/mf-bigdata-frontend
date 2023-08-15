<template>
  <div class="home-item">
    <div class="cover">
      <img :src="itemData.imgUrl" @click="goPage(itemData.path)" />
    </div>
    <div class="more">
      <div class="title">
        <span>{{ itemData.name }}</span>
      </div>
      <div class="article">
        {{ setContent(itemData.article, 20) }}
      </div>
      <div class="detail">
        <span @click="goPage(itemData.path)">查看详情 >> </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref } from "vue";
  const props = {
    itemData: { type: Object, default: {} },
  };
  export default {
    props,
    setup(props) {
      const itemData = ref(props.itemData);
      const setContent = (text, numSub) => {
        if (text == null) {
          return "";
        }
        if (text.length > numSub) {
          return text.substring(0, numSub - 1) + "...";
        }
        return text;
      };
      const goPage = (url) => {
        window.open(url, "_blank");
      };
      return {
        itemData,
        goPage,
        setContent,
      };
    },
  };
</script>

<style scoped>
  .cover img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  .more {
    margin: 10px 5px 10px -10px;
  }

  .title {
    margin-left: 10px;
    font-size: 13px;
    color: #333;
    font-weight: bold;
    text-align: left;
  }

  .article {
    font-size: 13px;
    margin: 10px 0 10px 10px;
    height: 28px;
    text-align: left;
  }

  .detail {
    width: 80px;
    height: 25px;
    margin-left: 5px;
    border: 1px solid green;
    border-radius: 25px;
    margin-top: 22px;
  }

  .detail:hover {
    background-color: green;
  }

  .detail span {
    margin-left: 5px;
    font-size: 12px;
    color: green;
    text-decoration: none;
  }

  .detail:hover span {
    color: white;
  }

  @media only screen and (max-width: 750px) {
    .cover img {
      width: 100%;
      height: 190px;
    }

    .title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
      margin-left: 0;
    }

    .article {
      font-size: 13px;
      margin: 10px 0 10px 0;
      height: 28px;
    }

    .detail {
      width: 80px;
      height: 20px;
      margin-top: 30px;
      border: 1px solid green;
      border-radius: 15px;
    }

    .detail:hover {
      background-color: green;
    }

    .detail a {
      font-size: 10px;
      margin: 0 auto;
      color: green;
      text-decoration: none;
      cursor: pointer;
    }

    .detail:hover a {
      color: white;
    }
  }
</style>
