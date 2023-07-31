import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";

/**
 * @description: 企业生产信息表
 * @author cgli
 * @date: 2023-07-11
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "企业",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "产品类别",
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
    title: "均价",
    dataIndex: "price",
    width: 120,
  },
  {
    title: "生产规模",
    dataIndex: "scale",
    width: 120,
  },
  {
    title: "生产规模单位",
    dataIndex: "scaleUnit",
    width: 120,
  },
  {
    title: "价格单位",
    dataIndex: "priceUnit",
    width: 120,
  },
  {
    title: "预计上市时间",
    dataIndex: "estimatedLaunchDate",
    width: 120,
  },
  {
    title: "标识（多个，用分号分割）",
    dataIndex: "identifiers",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "companyName",
    label: "企业",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品类别",
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
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "price",
  //   label: "均价",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
];
export const produceInfoFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "companyId",
    label: "公司",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "companyName",
        value: "id",
      },
    },
  },
  {
    field: "flag",
    label: "产品类别",
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
  },
  {
    field: "price",
    label: "均价",
    component: "Input",
  },
  {
    field: "scale",
    label: "生产规模",
    component: "Input",
  },
  {
    field: "scaleUnit",
    label: "生产规模单位",
    component: "Input",
  },
  {
    field: "priceUnit",
    label: "价格单位",
    component: "Input",
  },
  {
    field: "estimatedLaunchDate",
    label: "预计上市时间",
    component: "Input",
  },
  {
    field: "identifiers",
    label: "标识（多个，用分号分割）",
    component: "Input",
  },
];
