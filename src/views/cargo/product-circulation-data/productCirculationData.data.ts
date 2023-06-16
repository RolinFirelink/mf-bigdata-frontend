import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";
import { h } from "vue";
import { Tag } from "ant-design-vue";
/**
 * @description: 货运表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "货运ID",
    dataIndex: "id",
    width: 120,
  },
  {
    title: "订单号",
    dataIndex: "orderId",
    width: 120,
  },
  {
    title: "订单类型",
    dataIndex: "businessType",
    width: 120,
    customRender: ({ record }) => {
      const color = "#FF9800";
      let text = "";
      switch (record.businessType) {
        case 1:
          text = "采购订单";
          break;
        case 2:
          text = "销售订单";
          break;
        case 3:
          text = "退货订单";
          break;
      }
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: "承运商",
    dataIndex: "companyName",
    width: 120,
  },
  {
    title: "发货时间",
    dataIndex: "deliveryTime",
    width: 120,
  },
  {
    title: "发货地点",
    dataIndex: "shippingLocation",
    width: 120,
  },
  {
    title: "收货时间",
    dataIndex: "receivingTime",
    width: 120,
  },
  {
    title: "收货地点",
    dataIndex: "receivingLocation",
    width: 120,
  },
  {
    title: "运输方式",
    dataIndex: "modeTransport",
    width: 120,
  },
  {
    title: "运输价格",
    dataIndex: "transportationPrice",
    width: 120,
  },
  {
    title: "运输天数",
    dataIndex: "transportationTime",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "orderId",
    label: "订单号",
    component: "Input",
    colProps: { lg: 4, md: 8 },
  },
  {
    field: "businessType",
    label: "订单类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "采购订单", value: 1 },
        {
          label: "销售订单",
          value: 2,
        },
        {
          label: "退货订单",
          value: 2,
        },
      ],
    },
    colProps: { lg: 5, md: 8 },
  },
  {
    field: "modeTransport",
    label: "运输方式",
    component: "Select",
    componentProps: {
      options: [
        {
          label: "海洋运输",
          value: "海洋运输",
        },
        {
          label: "铁路运输",
          value: "铁路运输",
        },
        {
          label: "航空运输",
          value: "航空运输",
        },
        {
          label: "公路运输",
          value: "公路运输",
        },
        {
          label: "管道运输",
          value: "管道运输",
        },
        {
          label: "集装箱运输",
          value: "集装箱运输",
        },
        {
          label: "国际多式联运",
          value: "国际多式联运",
        },
      ],
    },
    colProps: { lg: 5, md: 8 },
  },
];
export const productCirculationDataFormSchema: FormSchema[] = [
  {
    field: "id",
    label: "唯一ID",
    component: "Input",
    show: false,
  },
  {
    field: "orderId",
    label: "订单号",
    component: "Input",
  },
  {
    field: "deliveryTime",
    label: "发货时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发货时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "shippingLocation",
    label: "发货地点",
    component: "Cascader",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    required: true,
    colProps: { lg: 24, md: 8 },
  },
  {
    field: "detail1",
    label: "发货详细地址",
    component: "Input",
    colProps: { lg: 24, md: 8 },
  },
  {
    field: "receivingTime",
    label: "收货时间",
    component: "DatePicker",
    componentProps: {
      format: "YYYY-MM-DD HH:mm:ss",
      placeholder: "发布时间",
      showTime: true,
    },
    colProps: { lg: 12, md: 8 },
  },
  {
    field: "receivingLocation",
    label: "收货地点",
    component: "Cascader",
    componentProps: {
      fieldNames: {
        label: "name",
        value: "id",
      },
    },
    required: true,
    colProps: { lg: 24, md: 8 },
  },
  {
    field: "detail2",
    label: "收货详细地址",
    component: "Input",
    colProps: { lg: 24, md: 8 },
  },
  {
    field: "modeTransport",
    label: "运输方式",
    component: "Select",
    componentProps: {
      options: [
        {
          label: "海洋运输",
          value: "海洋运输",
        },
        {
          label: "铁路运输",
          value: "铁路运输",
        },
        {
          label: "航空运输",
          value: "航空运输",
        },
        {
          label: "公路运输",
          value: "公路运输",
        },
        {
          label: "管道运输",
          value: "管道运输",
        },
        {
          label: "集装箱运输",
          value: "集装箱运输",
        },
        {
          label: "国际多式联运",
          value: "国际多式联运",
        },
      ],
    },
    colProps: { lg: 24, md: 8 },
  },
  {
    field: "transportationPrice",
    label: "运输价格（元）",
    component: "InputNumber",
  },
  {
    field: "transportationTime",
    label: "运输天数",
    component: "InputNumber",
  },
  {
    field: "companyId",
    label: "承运商",
    component: "Select",
    componentProps: {
      fieldNames: { label: "companyName", value: "id" },
    },
  },
  {
    field: "businessType",
    label: "订单类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "采购订单", value: 1 },
        {
          label: "销售订单",
          value: 2,
        },
        {
          label: "退货订单",
          value: 2,
        },
      ],
    },
  },
];
