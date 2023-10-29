<template>
  <div class="container">
    <Form>
      <FormItem label="菜单栏下的图片" style="margin-right: 30px">
        <CropperImage
          :uploadApi="uploadApi"
          @del-img="optionImg = ''"
          :value="optionImg"
          :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
          @change="updateOptionImg"
          width="450"
          height="450"
        />
      </FormItem>
      <FormItem label="首页舆情报告" style="margin-right: 30px">
        <div style="float: left; margin-right: 30px">
          <CropperImage
            :uploadApi="uploadApi"
            @del-img="articleImg1 = ''"
            :value="articleImg1"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateArticleImg1"
            width="380"
            height="250"
          />
          <div><span>链接</span> <Input class="content" v-model:value="articleImg1Link" /> </div>
        </div>
        <div>
          <CropperImage
            :uploadApi="uploadApi"
            @del-img="articleImg2 = ''"
            :value="articleImg2"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateArticleImg2"
            width="380"
            height="250"
          />
          <div><span>链接</span> <Input class="content" v-model:value="articleImg2Link" /> </div>
        </div>
      </FormItem>
      <div style="display: flex">
        <FormItem label="左边内容" style="margin-right: 30px">
          <div><span>标题：</span> <Input class="content" v-model:value="leftTitle" /> </div>
          <div v-for="(item, index) in leftContent" :key="index"
            ><span>第{{ index + 1 }}行：</span>
            <Input class="content" v-model:value="leftContent[index]" />
            <Button @click="removeContent(0, index)">删除</Button>
          </div>
          <Button @click="addContent(0)">增加</Button>
        </FormItem>
        <FormItem label="右边内容">
          <div><span>标题：</span> <Input class="content" v-model:value="rightTitle" /></div>
          <div v-for="(item, index) in rightContent" :key="index"
            ><span>第{{ index + 1 }}行：</span>
            <Input class="content" v-model:value="rightContent[index]" />
            <Button @click="removeContent(1, index)">删除</Button>
          </div>
          <Button @click="addContent(1)">增加</Button>
        </FormItem>
      </div>
      <div style="display: flex">
        <FormItem label="图片1" style="margin-right: 140px">
          <CropperImage
            :uploadApi="uploadApi"
            @del-img="img1 = ''"
            :value="img1"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateImg1"
            width="300"
            height="300"
          />
          <div><span>名称</span> <Input class="content" v-model:value="img1Name" /> </div>
        </FormItem>
        <FormItem label="图片2">
          <CropperImage
            :uploadApi="uploadApi"
            @del-img="img2 = ''"
            :value="img2"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateImg2"
            width="300"
            height="300"
          />
          <div><span>名称</span> <Input class="content" v-model:value="img2Name" /> </div>
        </FormItem>
      </div>
      <div style="display: flex">
        <FormItem label="底部内容" style="margin-right: 30px">
          <Input class="content" v-model:value="footerContent" style="width: 430px" />
        </FormItem>
        <FormItem label="底部备案号" style="margin-right: 30px">
          <Input class="content" v-model:value="footerICP" />
        </FormItem>
      </div>
      <Button style="margin-left: 450px" @click="save">保存</Button>
    </Form>
  </div>
</template>

<script lang="ts">
  import { Form, FormItem, Input, Button } from "ant-design-vue";
  import { onMounted, ref } from "vue";
  import { uploadApi } from "/@/api/storage/Upload";
  import { CropperImage } from "/@/components/general/Cropper";
  import { getDictItems, updateBatchDictItem } from "/@/api/sys/DictItem";
  export default {
    name: "Setting",
    components: { Form, FormItem, Input, Button, CropperImage },
    setup() {
      const optionImg = ref("");
      const leftTitle = ref("关于我们");
      const rightTitle = ref("联系我们");
      const leftContent = ref([
        "广东省农业对外经济与农民合作促进中心（广东省农业展览馆）",
        "地址：广东省广州市天河区先烈东路135号",
        "邮编：510000",
      ]);
      const rightContent = ref(["020-37288612"]);
      const img1 = ref("");
      const img2 = ref("");
      const img1Name = ref("");
      const img2Name = ref("");
      const footerContent = ref("Copyright © 2023 广东特色农产品大数据 all right reserved");
      const footerICP = ref("粤ICP 备 12015709 号-16");
      const articleImg1 = ref("");
      const articleImg1Link = ref("");
      const articleImg2 = ref("");
      const articleImg2Link = ref("");
      const dataMap = new Map();
      async function load() {
        const data = await getDictItems("pc_footer_setting");
        console.log(data);
        data.forEach((item) => {
          dataMap.set(item.dictLabel, item);
        });
        optionImg.value = dataMap.get("optionImg").dictValue;
        leftTitle.value = dataMap.get("leftTitle").dictValue;
        leftContent.value = dataMap.get("leftContent").dictValue.split(";").filter(Boolean);
        rightTitle.value = dataMap.get("rightTitle").dictValue;
        rightContent.value = dataMap.get("rightContent").dictValue.split(";").filter(Boolean);
        img1.value = dataMap.get("img1").dictValue;
        img2.value = dataMap.get("img2").dictValue;
        img1Name.value = dataMap.get("img1Name").dictValue;
        img2Name.value = dataMap.get("img2Name").dictValue;
        footerContent.value = dataMap.get("footerContent").dictValue;
        footerICP.value = dataMap.get("footerICP").dictValue;
        console.log(
          dataMap.get("articleImg1").dictValue.split(";"),
          dataMap.get("articleImg2").dictValue.split(";"),
        );
        articleImg1.value = dataMap.get("articleImg1").dictValue.split(";")[0];
        articleImg1Link.value = dataMap.get("articleImg1").dictValue.split(";")[1];
        articleImg2.value = dataMap.get("articleImg2").dictValue.split(";")[0];
        articleImg2Link.value = dataMap.get("articleImg2").dictValue.split(";")[1];
      }
      function removeContent(type, index) {
        if (type === 0) {
          leftContent.value = [
            ...leftContent.value.slice(0, index),
            ...leftContent.value.slice(index + 1, leftContent.value.length),
          ];
        } else {
          rightContent.value = [
            ...rightContent.value.slice(0, index),
            ...rightContent.value.slice(index + 1, rightContent.value.length),
          ];
        }
      }
      function addContent(type) {
        if (type === 0) {
          leftContent.value.push("");
        } else {
          rightContent.value.push("");
        }
      }
      function updateImg1({ data }, fileUrl) {
        console.log(data, fileUrl);
        img1.value = fileUrl;
      }
      function updateImg2({ data }, fileUrl) {
        console.log(data, fileUrl);
        img2.value = fileUrl;
      }
      function updateOptionImg({ data }, fileUrl) {
        console.log(data, fileUrl);
        optionImg.value = fileUrl;
      }
      function updateArticleImg1({ data }, fileUrl) {
        console.log(data, fileUrl);
        articleImg1.value = fileUrl;
      }
      function updateArticleImg2({ data }, fileUrl) {
        console.log(data, fileUrl);
        articleImg2.value = fileUrl;
      }
      async function save() {
        console.log(
          leftTitle.value,
          rightTitle.value,
          leftContent.value,
          rightContent.value,
          img1.value,
          img2.value,
          img1Name.value,
          img2Name.value,
        );
        let leftContentValue = "";
        let rightContentValue = "";
        leftContent.value.forEach((item) => {
          leftContentValue += item + ";";
        });
        rightContent.value.forEach((item) => {
          rightContentValue += item + ";";
        });
        const leftTitleItem = dataMap.get("leftTitle");
        const leftContentItem = dataMap.get("leftContent");
        const rightTitleItem = dataMap.get("rightTitle");
        const rightContentItem = dataMap.get("rightContent");
        const img1Item = dataMap.get("img1");
        const img1NameItem = dataMap.get("img1Name");
        const img2Item = dataMap.get("img2");
        const img2NameItem = dataMap.get("img2Name");
        const footerContentItem = dataMap.get("footerContent");
        const footerICPItem = dataMap.get("footerICP");
        const optionImgItem = dataMap.get("optionImg");
        const aticleImg1Item = dataMap.get("articleImg1");
        const aticleImg2Item = dataMap.get("articleImg2");
        leftTitleItem.dictValue = leftTitle.value;
        leftContentItem.dictValue = leftContentValue;
        rightTitleItem.dictValue = rightTitle.value;
        rightContentItem.dictValue = rightContentValue;
        img1Item.dictValue = img1.value;
        img1NameItem.dictValue = img1Name.value;
        img2Item.dictValue = img2.value;
        img2NameItem.dictValue = img2Name.value;
        footerContentItem.dictValue = footerContent.value;
        footerICPItem.dictValue = footerICP.value;
        optionImgItem.dictValue = optionImg.value;
        aticleImg1Item.dictValue = articleImg1.value + ";" + articleImg1Link.value;
        aticleImg2Item.dictValue = articleImg2.value + ";" + articleImg2Link.value;
        const data = await updateBatchDictItem([
          leftTitleItem,
          leftContentItem,
          rightTitleItem,
          rightContentItem,
          img1Item,
          img1NameItem,
          img2Item,
          img2NameItem,
          footerContentItem,
          footerICPItem,
          optionImgItem,
          aticleImg1Item,
          aticleImg2Item,
        ]);
        console.log(data);
        load();
      }
      onMounted(() => {
        load();
      });
      return {
        leftContent,
        rightContent,
        removeContent,
        addContent,
        img1,
        img2,
        uploadApi,
        updateImg1,
        updateImg2,
        updateOptionImg,
        save,
        rightTitle,
        optionImg,
        leftTitle,
        img1Name,
        img2Name,
        footerICP,
        footerContent,
        articleImg1,
        articleImg2,
        articleImg1Link,
        articleImg2Link,
        updateArticleImg2,
        updateArticleImg1,
      };
    },
  };
</script>

<style scoped>
  .container {
    margin: 1%;
    padding: 1%;
    background-color: white;
    min-height: 95%;
    min-width: 95%;
  }

  .content {
    width: 300px;
    margin: 5px 5px;
  }
</style>
