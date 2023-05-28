import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 产品库存表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
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
  // {
  //   title: "自定义拓展JSON结构数据",
  //   dataIndex: "data",
  //   width: 120
  // },
  // {
  //   title: "产品id",
  //   dataIndex: "materialId",
  //   width: 120,
  // },
  {
    title: "产品名称",
    dataIndex: "materialName",
    width: 120,
  },
  {
    title: "库存数量",
    dataIndex: "number",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "关联产品",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  // {
  //   field: "data",
  //   label: "自定义拓展JSON结构数据",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
];
export const materialStorageFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
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
  // {
  //   field: "data",
  //   label: "自定义拓展JSON结构数据",
  //   component: "Input",
  // },
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
    field: "number",
    label: "库存数量",
    component: "InputNumber",
  },
];
