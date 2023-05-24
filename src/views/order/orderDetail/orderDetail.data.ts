import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { dateUtil } from "/@/utils/DateUtil";
/**
 * @description: 订单数据明细表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品编号",
    dataIndex: "productId",
    width: 120,
  },
  {
    title: "产品名称",
    dataIndex: "productName",
    width: 120,
  },
  {
    title: "产品图片地址",
    dataIndex: "productAvatar",
    width: 120,
  },
  {
    title: "销售时间",
    dataIndex: "salesTime",
    width: 120,
  },
  {
    title: "销售数量",
    dataIndex: "salesQuantity",
    width: 120,
  },
  {
    title: "销售单价",
    dataIndex: "salesAmount",
    width: 120,
  },
  {
    title: "销售批次",
    dataIndex: "salesBatchNumber",
    width: 120,
  },
  {
    title: "计量单位",
    dataIndex: "unit",
    width: 120,
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
  {
    title: "自定义拓展信息 JSON 结构",
    dataIndex: "extendField",
    width: 120,
  },
  {
    title: "是否开启批号",
    dataIndex: "enableBatchNumber",
    width: 120,
  },
];
export const orderDetailFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "productId",
    label: "产品编号",
    component: "Input",
  },
  {
    field: "productName",
    label: "产品名称",
    component: "Input",
  },
  {
    field: "productAvatar",
    label: "产品图片地址",
    component: "Input",
  },
  {
    field: "salesTime",
    label: "销售时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布结束时间",
      showTime: {
        hideDisabledOptions: true,
        defaultValue: [dateUtil("00:00:00")],
      },
      ranges: {
        ["今天"]: [dateUtil().startOf("day"), dateUtil()],
        ["昨天"]: [
          dateUtil().startOf("day").subtract(1, "days"),
          dateUtil().endOf("day").subtract(1, "days"),
        ],
        ["最近一周"]: [dateUtil().subtract(1, "weeks")],
        ["最近两周"]: [dateUtil().subtract(2, "weeks")],
        ["最近1个月"]: [dateUtil().subtract(1, "months")],
        ["最近3个月"]: [dateUtil().subtract(3, "months")],
      },
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "salesQuantity",
    label: "销售数量",
    component: "InputNumber",
  },
  {
    field: "salesAmount",
    label: "销售单价",
    component: "InputNumber",
  },
  {
    field: "salesBatchNumber",
    label: "销售批次",
    component: "InputNumber",
  },
  {
    field: "unit",
    label: "计量单位",
    component: "Input",
  },
  {
    field: "remark",
    label: "备注",
    component: "Input",
  },
  {
    field: "extendField",
    label: "自定义拓展信息 JSON 结构",
    component: "Input",
  },
  {
    field: "enableBatchNumber",
    label: "是否开启批号",
    component: "RadioButtonGroup",
    defaultValue: 0,
    componentProps: {
      options: [
        { label: "否", value: 0 },
        { label: "是", value: 1 },
      ],
    },
    colProps: { span: 12 },
  },
];
