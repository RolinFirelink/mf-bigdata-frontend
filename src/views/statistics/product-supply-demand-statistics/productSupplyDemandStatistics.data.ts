import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
import { dateUtil } from "/@/utils/DateUtil";

/**
 * @description: 产品供需统计表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品",
    dataIndex: "product",
    width: 120,
  },
  {
    title: "供应",
    dataIndex: "supply",
    width: 120,
  },
  {
    title: "需求",
    dataIndex: "demand",
    width: 120,
  },
  {
    title: "单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "产品类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "日期",
    dataIndex: "statisticsTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  // {
  //   field: "product",
  //   label: "产品",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "[startDate, endDate]",
    label: "统计时间",
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
export const productSupplyDemandStatisticsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "product",
    label: "产品",
    component: "Input",
  },
  {
    field: "supply",
    label: "供应",
    component: "Input",
  },
  {
    field: "demand",
    label: "需求",
    component: "Input",
  },
  {
    field: "unit",
    label: "单位",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "statisticsTime",
    label: "日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
];
