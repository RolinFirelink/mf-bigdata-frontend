import { FormSchema } from "/@/components/general/Table";
/**
 * @description: 订单数据明细表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const orderDetailFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "materialId",
    label: "产品",
    component: "Select",
    componentProps: {
      fieldNames: {
        value: "id",
        label: "name",
      },
    },
  },
  {
    field: "salesQuantity",
    label: "销售数量",
    component: "InputNumber",
  },
  {
    field: "salesAmount",
    label: "销售单价（元）",
    component: "InputNumber",
  },
  {
    field: "unit",
    label: "数量单位",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea",
  },
];
