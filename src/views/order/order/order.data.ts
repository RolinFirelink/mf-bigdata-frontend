import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { dateUtil } from "/@/utils/DateUtil";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 订单数据主表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "供应企业编号",
    dataIndex: "companyId",
    width: 120,
  },
  {
    title: "供应企业编码",
    dataIndex: "companyNo",
    width: 120,
  },
  {
    title: "供应企业名称",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "客户编号",
    dataIndex: "customerId",
    width: 120,
  },
  {
    title: "客户名称",
    dataIndex: "customerName",
    width: 120,
  },
  {
    title: "订单渠道",
    dataIndex: "orderChannel",
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
      const color = "black";
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
    dataIndex: "orderCreateTime",
    width: 120,
  },
  {
    title: "订单是否完成",
    dataIndex: "completeFlag",
    width: 120,
    customRender: ({ record }) => {
      const status = record.contentModel;
      const enable = ~~status === 1;
      const color = enable ? "green" : "yellow";
      const text = enable ? "已完成" : "未完成";
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "订单完成时间",
    dataIndex: "orderCompleteTime",
    width: 120,
  },
  {
    title: "销售总量",
    dataIndex: "totalSales",
    width: 120,
  },
  {
    title: "销售地点",
    dataIndex: "orderLocation",
    width: 120,
  },
  {
    title: "产品种类",
    dataIndex: "flag",
    width: 120,
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
    field: "companyId",
    label: "供应企业编号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "companyNo",
    label: "供应企业编码",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "companyName",
    label: "供应企业名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "productId",
    label: "产品编号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "productName",
    label: "产品名称",
    component: "Input",
    colProps: { lg: 4, md: 5 },
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
    field: "companyId",
    label: "供应企业编号",
    component: "Input",
  },
  {
    field: "companyNo",
    label: "供应企业编码",
    component: "Input",
  },
  {
    field: "companyName",
    label: "供应企业名称",
    component: "Input",
  },
  {
    field: "customerId",
    label: "客户编号",
    component: "Input",
  },
  {
    field: "customerNo",
    label: "客户编码",
    component: "Input",
  },
  {
    field: "customerName",
    label: "客户名称",
    component: "Input",
  },
  {
    field: "orderChannel",
    label: "订单渠道",
    component: "Input",
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
    field: "orderStatus",
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
    field: "orderCreateTime",
    label: "订单创建时间",
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
    field: "completeFlag",
    label: "订单是否完成",
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
  {
    field: "orderCompleteTime",
    label: "订单完成时间",
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
    field: "totalSales",
    label: "销售总量",
    component: "Input",
  },
  {
    field: "orderLocation",
    label: "销售地点",
    component: "Input",
  },
  {
    field: "flag",
    label: "产品类型",
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
