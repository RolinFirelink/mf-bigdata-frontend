import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { getDictItems } from "/@/api/sys/DictItem";
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
    componentProps: getDictItems("mk_product_type"),
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
