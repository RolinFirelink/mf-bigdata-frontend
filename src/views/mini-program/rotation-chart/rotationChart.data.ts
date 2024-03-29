import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
/**
 * @description: 轮播图图片
 * @author cgli
 * @date: 2023-06-08
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "图片",
    dataIndex: "imgUrl",
    customRender: ({ record }) => {
      const imgList = [record.imgUrl];
      return h(TableImage, { size: 40, simpleShow: true, imgList: imgList });
    },
    width: 60,
  },
  {
    title: "跳转路径",
    dataIndex: "path",
    width: 120,
  },
  {
    title: "顺序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "状态",
    dataIndex: "status",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      let color = "";
      switch (record.status) {
        case 0:
          text = "不使用";
          color = "red";
          break;
        case 1:
          text = "使用";
          color = "green";
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "位置",
    dataIndex: "position",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      let color = "";
      switch (record.position) {
        case 0:
          text = "手机端";
          color = "red";
          break;
        case 1:
          text = "PC端";
          color = "green";
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "status",
    label: "状态",
    component: "Select",
    componentProps: {
      options: [
        { value: 0, label: "不使用" },
        {
          value: 1,
          label: "使用",
        },
      ],
    },
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "position",
    label: "位置",
    component: "Select",
    componentProps: {
      options: [
        { value: 0, label: "小程序" },
        {
          value: 1,
          label: "PC端",
        },
      ],
    },
    colProps: { lg: 4, md: 5 },
  },
];
export const rotationChartFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "path",
    label: "跳转路径",
    component: "Input",
  },
  {
    field: "sort",
    label: "顺序",
    component: "InputNumber",
    defaultValue: 10,
  },
  {
    field: "status",
    label: "状态",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "不使用", value: 0 },
        { label: "使用", value: 1 },
      ],
    },
    required: true,
  },
  {
    field: "position",
    label: "位置",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "手机端", value: 0 },
        { label: "PC端", value: 1 },
      ],
    },
    required: true,
  },
];
