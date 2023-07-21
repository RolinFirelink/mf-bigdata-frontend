import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
import { dateUtil } from "/@/utils/DateUtil";

/**
 * @description: 产品基地每日数据
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "生产基地ID",
    dataIndex: "baseId",
    width: 120,
  },
  {
    title: "基地名称",
    dataIndex: "baseName",
    width: 120,
  },
  {
    title: "日期",
    dataIndex: "time",
    width: 120,
  },
  {
    title: "产品类型",
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
        case 7:
          text = "鸽子";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "产品",
    dataIndex: "product",
    width: 120,
  },
  {
    title: "供应量",
    dataIndex: "supply",
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
    title: "销售额",
    dataIndex: "sales",
    width: 120,
  },
  {
    title: "销售额单位",
    dataIndex: "salesUnit",
    width: 120,
  },
  {
    title: "需求量",
    dataIndex: "demand",
    width: 120,
  },
  {
    title: "供应和需求单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "销售量",
    dataIndex: "salesVolume",
    width: 120,
  },
  {
    title: "销售量单位",
    dataIndex: "salesVolumeUnit",
    width: 120,
  },
  {
    title: "城市",
    dataIndex: "city",
    width: 120,
  },
  {
    title: "纬度",
    dataIndex: "lat",
    width: 120,
  },
  {
    title: "经度",
    dataIndex: "lng",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "baseName",
    label: "基地名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "flag",
    label: "产品类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
        { label: "鸽子", value: 7 },
      ],
    },
    colProps: { lg: 4, md: 5 },
  },
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
export const productBaseDayDataFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "baseId",
    label: "生产基地ID",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "baseName",
        value: "id",
      },
    },
  },
  {
    field: "time",
    label: "日期",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD",
      placeholder: "记录日期",
      showTime: true,
    },
  },
  {
    field: "flag",
    label: "产品类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "肉鸡", value: 1 },
        { label: "柑橘", value: 2 },
        { label: "兰花", value: 3 },
        { label: "对虾", value: 4 },
        { label: "菜心", value: 5 },
        { label: "预制菜", value: 6 },
        { label: "鸽子", value: 7 },
      ],
    },
  },
  {
    field: "product",
    label: "产品",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "name",
      },
    },
  },
  {
    field: "supply",
    label: "供应量",
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
    field: "sales",
    label: "销售额",
    component: "Input",
  },
  {
    field: "salesUnit",
    label: "销售额单位",
    component: "Input",
  },
  {
    field: "demand",
    label: "需求量",
    component: "Input",
  },
  {
    field: "unit",
    label: "供应和需求单位",
    component: "Input",
  },
  {
    field: "salesVolume",
    label: "销售量",
    component: "Input",
  },
  {
    field: "salesVolumeUnit",
    label: "销售量单位",
    component: "Input",
  },
  {
    field: "city",
    label: "城市",
    component: "Input",
  },
  {
    field: "lat",
    label: "纬度",
    component: "Input",
  },
  {
    field: "lng",
    label: "经度",
    component: "Input",
  },
  {
    field: "baseName",
    label: "基地名称",
    component: "Select",
    componentProps: {
      fieldNames: {
        label: "baseName",
        value: "baseName",
      },
    },
    required: true,
  },
];
