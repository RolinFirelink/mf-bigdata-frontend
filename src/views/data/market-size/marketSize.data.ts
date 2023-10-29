import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 市场规模
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产量类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "市场规模（亿元）",
    dataIndex: "marketSize",
    width: 120,
  },
  {
    title: "年份",
    dataIndex: "year",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "year",
    label: "年份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const marketSizeFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "marketSize",
    label: "市场规模（亿元）",
    component: "InputNumber",
  },
  {
    field: "year",
    label: "年份",
    component: "Input",
  },
];
