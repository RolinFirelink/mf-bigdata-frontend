import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 客户消费行为表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "客户ID",
    dataIndex: "customerId",
    width: 120,
  },
  {
    title: "行为类型",
    dataIndex: "type",
    width: 120,
  },
  {
    title: "扩展信息",
    dataIndex: "extendInfo",
    width: 120,
  },
  {
    title: "备注",
    dataIndex: "remark",
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
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "customerId",
    label: "客户ID",
    component: "Input",
  },
  {
    field: "type",
    label: "行为类型",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "extendInfo",
    label: "扩展信息",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const customerBehaviorFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "customerId",
    label: "客户ID",
    component: "Input",
  },
  {
    field: "type",
    label: "行为类型",
    component: "Input",
  },
  {
    field: "extendInfo",
    label: "扩展信息",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
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
