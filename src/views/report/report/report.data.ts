import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 报表页面
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.flag) {
        case 1:
          text = "肉鸡";
          break;
        case 2:
          text = "柑橘";
          break;
        case 3:
          text = "兰花";
          break;
        case 4:
          text = "对虾";
          break;
        case 5:
          text = "菜心";
          break;
        case 6:
          text = "预制菜";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "封面图片",
    dataIndex: "imgUrl",
    width: 120,
  },
  {
    title: "类型",
    dataIndex: "type",
    width: 120,
    customRender: ({ record }) => {
      let color = "";
      let text = "";
      switch (record.type) {
        case 0:
          color = "green";
          text = "代码";
          break;
        case 1:
          color = "blue";
          text = "goView";
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "路由/地址",
    dataIndex: "path",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [];
export const reportFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "页面名称",
    component: "Input",
  },
  {
    field: "flag",
    label: "关联产品",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "imgUrl",
    label: "图片地址",
    component: "Input",
  },
  {
    field: "type",
    label: "类型",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "代码", value: 0 },
        { label: "goView", value: 1 },
      ],
    },
  },
  {
    field: "path",
    label: "路由/地址",
    component: "Input",
  },
];
