import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 公司营收
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "公司名称",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "公司营收（亿元）",
    dataIndex: "companyRevenue",
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
    field: "companyName",
    label: "公司名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "year",
    label: "年份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const companyRevenueFormSchema: FormSchema[] = [
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
    field: "companyName",
    label: "公司名称",
    component: "Input",
  },
  {
    field: "companyRevenue",
    label: "公司营收（亿元）",
    component: "InputNumber",
  },
  {
    field: "year",
    label: "年份",
    component: "InputNumber",
  },
];
