<template>
  <div class="lg:flex">
    <Avatar :src="avatar" :size="72" class="!mx-auto !block" />
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-2">
      <h1 class="md:text-lg text-md">早安, 开始您一天的工作吧！</h1>
      <span class="text-secondary">
        今日，天气
        {{ weather.weather }}，温度{{ weather.temperature }}℃
      </span>
    </div>
    <div class="flex flex-1 justify-end md:mt-0 mt-4"> </div>
  </div>
</template>
<script lang="ts" setup>
  import axios from "axios";
  import { computed, ref, onMounted } from "vue";

  import { Avatar } from "ant-design-vue";
  import { useUserStore } from "/@/store/modules/User";
  import headerImg from "/@/assets/images/header.png";
  import { imageUrl } from "/@/utils/FileUtils";
  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  const avatar = computed(() => {
    const imgUrl = userStore.getUserInfo?.headImgUrl;
    return imgUrl ? imageUrl("/storage/file/" + imgUrl) : headerImg;
  });

  const key = "1461880091e9c70bc197b8bd8dd81c70";
  const weather = ref({});

  const getLocationInfo = async () => {
    const params = {
      key,
    };
    const { data } = await axios.get("https://restapi.amap.com/v3/ip", { params });
    console.log("位置", data);

    getWeather(data.adcode);
  };
  const getWeather = async (adcode) => {
    const params = {
      key: key,
      city: adcode,
    };
    const { data } = await axios.get(`https://restapi.amap.com/v3/weather/weatherInfo`, { params });
    console.log("天气", data);
    weather.value = data.lives[0];
  };
  onMounted(() => {
    getLocationInfo();
  });
</script>
