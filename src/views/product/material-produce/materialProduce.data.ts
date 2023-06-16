import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 产品生产表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "公司",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "产品",
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
    title: "生产批次",
    dataIndex: "batch",
    width: 120,
  },
  {
    title: "生产规模",
    dataIndex: "productionScale",
    width: 120,
  },
  {
    title: "规模单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "单位产量估算",
    dataIndex: "productEstimate",
    width: 120,
  },
  {
    title: "预计上市产量",
    dataIndex: "marketEstimate",
    width: 120,
  },
  {
    title: "预计上市时间",
    dataIndex: "timeEstimate",
    width: 120,
  },
  {
    title: "基地",
    dataIndex: "productBaseName",
    width: 120,
  },
  {
    title: "生产数量",
    dataIndex: "quantity",
    width: 120,
  },
  {
    title: "是否卖出",
    dataIndex: "isSell",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "产品",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const materialProduceFormSchema: FormSchema[] = [
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
    field: "materialId",
    label: "产品",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
  },
  {
    field: "batch",
    label: "生产批次",
    component: "InputNumber",
  },
  {
    field: "productionScale",
    label: "生产规模",
    component: "InputNumber",
  },
  {
    field: "unit",
    label: "规模单位",
    component: "Input",
  },
  {
    field: "productEstimate",
    label: "单位产量估算",
    component: "InputNumber",
  },
  {
    field: "marketEstimate",
    label: "预计上市产量",
    component: "InputNumber",
  },
  {
    field: "timeEstimate",
    label: "预计上市时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "baseId",
    label: "基地",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "companyName",
        value: "id",
      },
    },
  },
  {
    field: "quantity",
    label: "生产数量",
    component: "InputNumber",
  },
  {
    field: "isSell",
    label: "是否卖出",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
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
];
