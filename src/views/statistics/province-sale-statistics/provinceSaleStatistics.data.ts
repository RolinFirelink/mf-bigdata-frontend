/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-15 18:53:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-20 17:51:02
 * @FilePath: \mf-bigdata-frontend\src\views\order\province-sale-statistics\provinceSaleStatistics.data.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { dateUtil } from "/@/utils/DateUtil";

import { getDictProps } from "/@/utils/DictUtils";

/**
 * @description: 省份销售数据
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "省份",
    dataIndex: "province",
    width: 120,
  },
  {
    title: "平均价格",
    dataIndex: "averagePrice",
    width: 120,
  },
  {
    title: "价格单位",
    dataIndex: "priceUnit",
    width: 120,
  },
  {
    title: "销售量",
    dataIndex: "sales",
    width: 120,
  },
  {
    title: "销售量单位",
    dataIndex: "saleUnit",
    width: 120,
  },
  {
    title: "产量类型",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "统计时间",
    dataIndex: "statisticalTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "province",
    label: "省份",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  // {
  //   field: "averagePrice",
  //   label: "平均价格",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  // {
  //   field: "sales",
  //   label: "销售量",
  //   component: "Input",
  //   colProps: { lg: 4, md: 5 },
  // },
  {
    field: "[startTime, endTime]",
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
export const provinceSaleStatisticsFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "province",
    label: "省份",
    component: "Input",
    required: true,
  },
  {
    field: "averagePrice",
    label: "平均价格",
    component: "Input",
    required: true,
  },
  {
    field: "priceUnit",
    label: "价格单位",
    component: "Input",
  },
  {
    field: "sales",
    label: "销售量",
    component: "Input",
    required: true,
  },
  {
    field: "saleUnit",
    label: "销售量单位",
    component: "Input",
    // required: true,
  },
  {
    field: "flag",
    label: "产量类型",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "statisticalTime",
    label: "统计时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
];
