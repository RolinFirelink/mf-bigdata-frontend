import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import TableImage from "/@/components/general/Table/src/components/TableImg.vue";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 报表页面
 * @author cgli
 * @date: 2023-05-31
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
    title: "产品类别",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "标题",
    dataIndex: "title",
    width: 120,
  },
  {
    title: "摘要",
    dataIndex: "summary",
    width: 120,
  },
  {
    title: "排序",
    dataIndex: "sort",
    width: 120,
  },
  {
    title: "路由",
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
    field: "title",
    label: "标题",
    component: "Input",
  },
  {
    field: "summary",
    label: "摘要",
    component: "Input",
  },
  {
    field: "flag",
    label: "关联产品",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { span: 12 },
  },
  {
    field: "sort",
    label: "排序",
    component: "InputNumber",
    componentProps: {
      defaultValue: 10,
    },
  },
  {
    field: "path",
    label: "路由",
    component: "Input",
  },
];
