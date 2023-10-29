import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
/**
 * @description: 地区生产宏观数据
 * @author cgli
 * @date: 2023-10-19
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产量类别",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "年份",
    dataIndex: "year",
    width: 120,
  },
  {
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "区域",
    dataIndex: "region",
    width: 120,
  },
  {
    title: "产量（吨/万株/万只）",
    dataIndex: "value",
    width: 150,
  },
  {
    title: "产值（亿元）",
    dataIndex: "money",
    width: 120,
  },
  {
    title: "生产规模（亩）",
    dataIndex: "area",
    width: 120,
  },
  {
    title: "产品",
    dataIndex: "product",
    width: 120,
  },
  {
    title: "第二产量值（存栏量）",
    dataIndex: "value2",
    width: 120,
  },
  {
    title: "上市时间",
    dataIndex: "toMarketTime",
    width: 120,
  },
  {
    title: "主要产品",
    dataIndex: "mainProduct",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
];
export const productionDataFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "region",
    label: "区域",
    component: "Input",
  },
  {
    field: "year",
    label: "年份",
    component: "Input",
  },
  {
    field: "product",
    label: "产品",
    component: "Input",
  },
  {
    field: "value",
    label: "产量",
    component: "Input",
  },
  {
    field: "money",
    label: "产值（亿元）",
    component: "Input",
  },
  {
    field: "area",
    label: "生产面积",
    component: "Input",
  },
  {
    field: "value2",
    label: "第二产量值",
    component: "Input",
  },
  {
    field: "toMarketTime",
    label: "上市时间",
    component: "Input",
  },
  {
    field: "mainProduct",
    label: "主要产品",
    component: "Input",
  },
];
