import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { Tag } from "ant-design-vue";
import { h } from "vue";
/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "是否删除",
    dataIndex: "deletedFlag",
    width: 120,
    customRender: ({ record }) => {
      const status = record.deletedFlag;
      const enable = ~~status === 1;
      const color = enable ? "green" : "grey";
      const text = enable ? "是" : "否";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "品牌名",
    dataIndex: "name",
    width: 120,
  },
  // {
  //   title: "品牌描述",
  //   dataIndex: "description",
  //   width: 120,
  // },
  {
    title: "品牌价值观",
    dataIndex: "companyValue",
    width: 120,
  },
  {
    title: "品牌官网",
    dataIndex: "companyWebsite",
    width: 120,
  },
  {
    title: "品牌创立时间",
    dataIndex: "establishedDate",
    width: 120,
  },
  {
    title: "区分字段",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "品牌归属公司名",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "品牌归属公司",
    dataIndex: "companyId",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  // {
  //   field: "deletedFlag",
  //   label: "是否删除",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "name",
    label: "品牌名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "description",
  //   label: "品牌描述",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
];
export const materialBrandFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "deletedFlag",
    label: "是否删除",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
  },
  {
    field: "name",
    label: "品牌名",
    component: "Input",
  },
  // {
  //   field: "description",
  //   label: "品牌描述",
  //   component: "Input",
  // },
  {
    field: "companyValue",
    label: "品牌价值观",
    component: "Input",
  },
  {
    field: "companyWebsite",
    label: "品牌官网",
    component: "Input",
  },
  {
    field: "establishedDate",
    label: "品牌创立时间",
    component: "Input",
  },
  {
    field: "flag",
    label: "区分字段",
    component: "Input",
  },
  {
    field: "companyName",
    label: "品牌归属公司名",
    component: "Input",
  },
  {
    field: "companyId",
    label: "品牌归属公司",
    component: "TreeSelect",
    required: true,
    componentProps: {
      fieldNames: {
        label: "name",
        key: "id",
        value: "id",
      },
      getPopupContainer: () => document.body,
    },
  },
];
