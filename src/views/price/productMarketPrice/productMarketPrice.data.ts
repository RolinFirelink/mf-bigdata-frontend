import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { dateUtil } from "/@/utils/DateUtil";

/**
 * @description: 产品批发价格表
 * @author cgli
 * @date: 2023-07-12
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "批发市场",
    dataIndex: "market",
    width: 120,
  },
  {
    title: "记录日期",
    dataIndex: "recordDate",
    width: 120,
  },
  {
    title: "最低价格",
    dataIndex: "bottomPrice",
    width: 120,
  },
  {
    title: "最高价格",
    dataIndex: "topPrice",
    width: 120,
  },
  {
    title: "平均价格",
    dataIndex: "averagePrice",
    width: 120,
  },
  {
    title: "产品名",
    dataIndex: "name",
    width: 120,
  },
  {
    title: "产品类别",
    dataIndex: "flag",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.flag) {
        case 1:
          text = "肉鸡";
          break;
        case 2:
          text = "柑橘";
          break;
        case 3:
          text = "兰花";
          break;
        case 4:
          text = "对虾";
          break;
        case 5:
          text = "菜心";
          break;
        case 6:
          text = "预制菜";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
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
    field: "market",
    label: "批发市场",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品类别  ",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制蔡", value: 6 },
      ],
    },
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "[startTime, endTime]",
    label: "发布时间",
    component: "RangePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: ["开始时间", "结束时间"],
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00", "HH:mm:ss"), dateUtil("23:59:59", "HH:mm:ss")],
      },
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
export const productMarketPriceFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "market",
    label: "批发市场",
    component: "Input",
  },
  {
    field: "recordDate",
    label: "记录日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "记录日期",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "bottomPrice",
    label: "最低价格",
    component: "Input",
  },
  {
    field: "topPrice",
    label: "最高价格",
    component: "Input",
  },
  {
    field: "averagePrice",
    label: "平均价格",
    component: "Input",
  },
  {
    field: "name",
    label: "产品名",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类别",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
      ],
    },
  },
  {
    field: "unit",
    label: "计量单位",
    component: "Input",
  },
];
