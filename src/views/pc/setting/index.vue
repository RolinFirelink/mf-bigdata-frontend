<template>
  <div class="container">
    <Form>
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
      const dataMap = new Map();
      async function load() {
        const data = await getDictItems("pc_footer_setting");
        console.log(data);
        data.forEach((item) => {
          dataMap.set(item.dictLabel, item);
        });
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
        save,
        rightTitle,
        leftTitle,
        img1Name,
        img2Name,
        footerICP,
        footerContent,
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
