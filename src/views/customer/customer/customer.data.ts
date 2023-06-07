import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 客户表
 * @author cgli
 * @date: 2023-05-17
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "客户名称",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "年龄",
    dataIndex: "age",
    width: 100,
  },
  {
    title: "性别",
    dataIndex: "gender",
    width: 100,
    customRender: ({ record }) => {
      let text = "";
      let color = "";
      switch (record.flag) {
        case 0:
          text = "女";
          color = "red";
          break;
        case 1:
          text = "男";
          color = "green";
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "职业",
    dataIndex: "occupation",
    width: 150,
  },
  {
    title: "城市",
    dataIndex: "city",
    width: 100,
  },
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 100,
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
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "name",
    label: "客户名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const customerFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "name",
    label: "客户名称",
    component: "Input",
  },
  {
    field: "age",
    label: "年龄",
    component: "InputNumber",
  },
  {
    field: "gender",
    label: "性别",
    component: "RadioButtonGroup",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "男", value: 0 },
        { label: "女", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
  {
    field: "occupation",
    label: "职业",
    component: "Input",
  },
  {
    field: "city",
    label: "城市",
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
];
