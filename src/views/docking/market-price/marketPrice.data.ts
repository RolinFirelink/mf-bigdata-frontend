import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { getDictProps } from "/@/utils/DictUtils";
import { dateUtil } from "/@/utils/DateUtil";
/**
 * @description: 惠农网批发市场数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "日期",
    dataIndex: "date",
    width: 120,
  },
  {
    title: "产品分类",
    dataIndex: "flag",
    width: 120,
  },
  {
    title: "平均价格",
    dataIndex: "avgPrice",
    width: 120,
  },
  {
    title: "批发市场",
    dataIndex: "marketName",
    width: 120,
  },
  {
    title: "单位",
    dataIndex: "unit",
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
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
    colProps: { lg: 4, md: 5 },
  },
];
export const marketPriceFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "date",
    label: "日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "日期",
    },
  },
  {
    field: "flag",
    label: "产品分类",
    component: "ApiSelect",
    componentProps: getDictProps("mk_product_type"),
  },
  {
    field: "avgPrice",
    label: "平均价格",
    component: "Input",
  },
  {
    field: "marketName",
    label: "批发市场",
    component: "Input",
  },
  {
    field: "unit",
    label: "单位",
    component: "Input",
  },
];
