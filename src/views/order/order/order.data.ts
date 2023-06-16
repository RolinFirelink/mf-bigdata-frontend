import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { dateUtil } from "/@/utils/DateUtil";
import { Tag } from "ant-design-vue";
/**
 * @description: 订单数据主表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "供应商",
    dataIndex: "vendorName",
    width: 120,
  },
  {
    title: "采购商",
    dataIndex: "buyerName",
    width: 120,
  },
  {
    title: "订单类型",
    dataIndex: "category",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.category) {
        case 1:
          text = "生产订单";
          break;
        case 2:
          text = "出库订单";
          break;
        case 3:
          text = "采购订单";
          break;
        case 4:
          text = "销售订单";
          break;
        case 5:
          text = "企业退货订单";
          break;
      }
      const color = "#FF9800";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "订单状态",
    dataIndex: "orderStatus",
    width: 120,
    customRender: ({ record }) => {
      let text = "";
      switch (record.category) {
        case 1:
          text = "企业待发货";
          break;
        case 2:
          text = "企业送货送货中";
          break;
        case 3:
          text = "客户待收货";
          break;
        case 4:
          text = "客户已收货";
          break;
        case 5:
          text = "客户已退货";
          break;
        case 6:
          text = "客户退货物流中";
          break;
        case 7:
          text = "企业已收到退货";
          break;
      }
      const color = "green";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "订单创建时间",
    dataIndex: "startTime",
    width: 120,
  },
  {
    title: "订单完成时间",
    dataIndex: "finishTime",
    width: 120,
  },
  {
    title: "关联产品",
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
    title: "备注",
    dataIndex: "remark",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "vendorName",
    label: "供应商",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "buyerName",
    label: "采购商",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "status",
    label: "订单状态",
    component: "Select",
    componentProps: {
      options: [
        { label: "企业待发货", value: 1 },
        { label: "企业送货送货中", value: 2 },
        { label: "客户待收货", value: 3 },
        { label: "客户已收货", value: 4 },
      ],
    },
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "[createStartTime, createEndTime]",
    label: "创建时间",
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
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "[finishStartTime, finishEndTime]",
    label: "完成时间",
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
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "flag",
    label: "关联产品",
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
    colProps: { lg: 5, md: 5 },
  },
];
export const shOrderFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "vendorId",
    label: "供应商",
    component: "Select",
    componentProps: {
      fieldNames: {
        value: "id",
        label: "companyName",
      },
    },
  },
  {
    field: "buyerId",
    label: "采购商",
    component: "Select",
    componentProps: {
      fieldNames: {
        value: "id",
        label: "companyName",
      },
    },
  },
  {
    field: "category",
    label: "订单类型",
    component: "Select",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "生产订单", value: 1 },
        { label: "出库订单", value: 2 },
        { label: "采购订单", value: 3 },
        { label: "销售订单", value: 4 },
        { label: "企业退货订单", value: 5 },
      ],
    },
  },
  {
    field: "status",
    label: "订单状态",
    component: "Select",
    defaultValue: 1,
    componentProps: {
      options: [
        { label: "企业待发货", value: 1 },
        { label: "企业送货送货中", value: 2 },
        { label: "客户待收货", value: 3 },
        { label: "客户已收货", value: 4 },
      ],
    },
  },
  {
    field: "startTime",
    label: "订单创建时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布结束时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "finishTime",
    label: "订单完成时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布结束时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "flag",
    label: "关联产品",
    component: "Select",
    defaultValue: 1,
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
  },
  {
    field: "remark",
    label: "备注",
    component: "InputTextArea",
    componentProps: {
      rows: 10,
    },
    colProps: { lg: 24, md: 24 },
  },
];
