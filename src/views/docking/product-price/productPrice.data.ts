import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
import { dateUtil } from "/@/utils/DateUtil";
/**
 * @description: 惠农网产品价格
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品名",
    dataIndex: "product",
    width: 120,
  },
  {
    title: "产品类别",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "平均价格",
    dataIndex: "price",
    width: 120,
  },
  {
    title: "最高价格",
    dataIndex: "maxPrice",
    width: 120,
  },
  {
    title: "最低价格",
    dataIndex: "minPrice",
    width: 120,
  },
  {
    title: "单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "地区",
    dataIndex: "region",
    width: 120,
  },
  {
    title: "省份",
    dataIndex: "provinceName",
    width: 120,
  },
  {
    title: "城市",
    dataIndex: "cityName",
    width: 120,
  },
  {
    title: "区",
    dataIndex: "areaName",
    width: 120,
  },
  {
    title: "日期",
    dataIndex: "collectdate",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "[startDate, endDate]",
    label: "日期",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: ["起始日期", "终止日期"],
      valueFormat: "YYYY-MM-DD",
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks"), dateUtil()],
        ["最近两周"]: [dateUtil().subtract(2, "weeks"), dateUtil()],
        ["最近1个月"]: [dateUtil().subtract(1, "months"), dateUtil()],
        ["最近3个月"]: [dateUtil().subtract(3, "months"), dateUtil()],
      },
    },
    colProps: { lg: 8, md: 8 },
  },
  {
    field: "product",
    label: "产品名",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品类别",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
];
export const productPriceFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "product",
    label: "产品名",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类别",
    component: "Input",
  },
  {
    field: "price",
    label: "平均价格",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "maxPrice",
    label: "最高价格",
    component: "Input",
  },
  {
    field: "minPrice",
    label: "最低价格",
    component: "Input",
  },
  {
    field: "unit",
    label: "单位",
    component: "Input",
  },
  {
    field: "region",
    label: "地区",
    component: "Input",
  },
  {
    field: "provinceName",
    label: "省份",
    component: "Input",
  },
  {
    field: "cityName",
    label: "城市",
    component: "Input",
  },
  {
    field: "areaName",
    label: "区",
    component: "Input",
  },
  {
    field: "collectdate",
    label: "日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "日期",
    },
  },
];
