import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
// import { h } from "vue";
// import { Tag } from "ant-design-vue";
import { dateUtil } from "/@/utils/DateUtil";
import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 产品价格表
 * @author cgli
 * @date: 2023-07-12
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "日期",
    dataIndex: "time",
    width: 120,
  },
  {
    title: "产品",
    dataIndex: "product",
    width: 120,
  },
  {
    title: "地区",
    dataIndex: "region",
    width: 120,
  },
  {
    title: "价格(xx元/一株)(xx元/斤）",
    dataIndex: "price",
    width: 120,
  },
  {
    title: "涨幅",
    dataIndex: "lifting",
    width: 120,
  },
  {
    title: "关联产品",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "计量单位",
    dataIndex: "unit",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "flag",
    label: "关联产品",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "region",
    label: "地区",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "[startTime, endTime]",
    label: "发布时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: ["开始时间", "结束时间"],
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
    colProps: { lg: 10, md: 8 },
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
    field: "time",
    label: "日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "记录日期",
      showTime: true,
    },
  },
  {
    field: "product",
    label: "产品",
    component: "Input",
  },
  {
    field: "region",
    label: "地区(**省**区)",
    component: "Input",
  },
  {
    field: "price",
    label: "价格(xx元/一株)(xx元/斤）",
    component: "Input",
  },
  {
    field: "lifting",
    label: "涨幅",
    component: "Input",
  },
  {
    field: "flag",
    label: "关联产品",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "unit",
    label: "计量单位",
    component: "Input",
  },
];
