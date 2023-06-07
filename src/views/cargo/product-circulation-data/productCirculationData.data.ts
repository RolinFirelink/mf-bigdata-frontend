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
    title: "发货时间",
    dataIndex: "deliveryTime",
    width: 120,
  },
  // {
  //   title: "发货单位",
  //   dataIndex: "forwardingUnit",
  //   width: 120,
  // },
  // {
  //   title: "发货人",
  //   dataIndex: "shipper",
  //   width: 120,
  // },
  // {
  //   title: "发货人电话",
  //   dataIndex: "shipperPhoneNumber",
  //   width: 120,
  // },
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
  // {
  //   title: "收货单位",
  //   dataIndex: "consignee",
  //   width: 120,
  // },
  // {
  //   title: "收货人",
  //   dataIndex: "receiver",
  //   width: 120,
  // },
  // {
  //   title: "收货人电话",
  //   dataIndex: "recieverPhone",
  //   width: 120,
  // },
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
    title: "运输时间",
    dataIndex: "transportationTime",
    width: 120,
  },
  // {
  //   title: "时间单位",
  //   dataIndex: "timeUnit",
  //   width: 120,
  // },
  // {
  //   title: "运输数量",
  //   dataIndex: "transportationQuantity",
  //   width: 120,
  // },
  // {
  //   title: "货运批次号",
  //   dataIndex: "batchNumber",
  //   width: 120,
  // },
  // {
  //   title: "货运单位",
  //   dataIndex: "shippingUnit",
  //   width: 120,
  // },
  // {
  //   title: "货运单号",
  //   dataIndex: "oddNumbers",
  //   width: 120,
  // },
  {
    title: "承运商",
    dataIndex: "companyId",
    width: 120,
  },
  // {
  //   title: "自定义拓展字段JSON结构",
  //   dataIndex: "extendField",
  //   width: 120,
  // },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  // {
  //   field: "materialName",
  //   label: "产品",
  //   component: "Input",
  //   colProps: { lg: 8, md: 5 },
  // },
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
  // {
  //   field: "materialId",
  //   label: "产品",
  //   component: "Select",
  //   required: true,
  //   componentProps: {
  //     fieldNames: {
  //       label: "name",
  //       value: "id",
  //     },
  //   },
  // },
  // {
  //   field: "dateManufacture",
  //   label: "生产日期",
  //   component: "DatePicker",
  //   componentProps: {
  //     format: "YYYY-MM-DD HH:mm:ss",
  //     placeholder: "生产日期",
  //     showTime: true,
  //   },
  // },
  // {
  //   field: "manufacturer",
  //   label: "供应商",
  //   component: "Select",
  // },
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
  // {
  //   field: "forwardingUnit",
  //   label: "发货单位",
  //   component: "Input",
  // },
  // {
  //   field: "shipper",
  //   label: "发货人",
  //   component: "Input",
  // },
  // {
  //   field: "shipperPhoneNumber",
  //   label: "发货人电话",
  //   component: "Input",
  // },
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
  // {
  //   field: "consignee",
  //   label: "收货单位",
  //   component: "Select",
  // },
  // {
  //   field: "receiver",
  //   label: "收货人",
  //   component: "Input",
  // },
  // {
  //   field: "recieverPhone",
  //   label: "收货人电话",
  //   component: "Input",
  // },
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
  // {
  //   field: "timeUnit",
  //   label: "时间单位",
  //   component: "Select",
  //   componentProps: {
  //     options: [
  //       { label: "天", value: "天" },
  //       { label: "月", value: "月" },
  //       { label: "年", value: "年" },
  //     ],
  //   },
  // },
  // {
  //   field: "transportationQuantity",
  //   label: "运输数量",
  //   component: "Input",
  // },
  // {
  //   field: "shippingUnit",
  //   label: "货运单位",
  //   component: "Input",
  // },
  // {
  //   field: "oddNumbers",
  //   label: "货运单号",
  //   component: "Input",
  // },
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
