import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
// import { h } from "vue";
// import { Tag } from "ant-design-vue";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 市场行情统计表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "产量",
    dataIndex: "yield",
    width: 120,
  },
  {
    title: "产量单位",
    dataIndex: "yieldUnit",
    width: 120,
  },
  {
    title: "平均价格（元）",
    dataIndex: "averagePrice",
    width: 120,
  },
  {
    title: "销售额（万元）",
    dataIndex: "sales",
    width: 120,
  },
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "city",
    label: "城市",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
];
export const marketStatisticsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "yield",
    label: "产量",
    component: "Input",
  },
  {
    field: "yieldUnit",
    label: "产量单位",
    component: "Input",
  },
  {
    field: "averagePrice",
    label: "平均价格（元）",
    component: "Input",
  },
  {
    field: "sales",
    label: "销售额（万元）",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
];
