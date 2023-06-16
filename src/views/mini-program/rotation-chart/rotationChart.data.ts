import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
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
    width: 120,
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
];
export const rotationChartFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "imgUrl",
    label: "图片地址",
    component: "Input",
    required: true,
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
];
