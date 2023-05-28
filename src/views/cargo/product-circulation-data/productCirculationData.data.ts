import { BasicColumn } from "/@/components/general/Table";
import { FormSchema } from "/@/components/general/Table";

/**
 * @description: 货运表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export const columns: BasicColumn[] = [
  {
    title: "产品编号",
    dataIndex: "materialId",
    width: 120,
  },
  {
    title: "生产日期",
    dataIndex: "dateManufacture",
    width: 120,
  },
  {
    title: "生产批次",
    dataIndex: "productionBatch",
    width: 120,
  },
  {
    title: "生产厂家",
    dataIndex: "manufacturer",
    width: 120,
  },
  {
    title: "发货时间",
    dataIndex: "deliveryTime",
    width: 120,
  },
  {
    title: "发货单位",
    dataIndex: "forwardingUnit",
    width: 120,
  },
  {
    title: "发货人",
    dataIndex: "shipper",
    width: 120,
  },
  {
    title: "发货人电话",
    dataIndex: "shipperPhoneNumber",
    width: 120,
  },
  {
    title: "发货地点",
    dataIndex: "shippingLocation",
    width: 120,
  },
  {
    title: "发货区域编码",
    dataIndex: "shippingAreaCode",
    width: 120,
  },
  {
    title: "收货时间",
    dataIndex: "receivingTime",
    width: 120,
  },
  {
    title: "收货单位",
    dataIndex: "consignee",
    width: 120,
  },
  {
    title: "收货人",
    dataIndex: "receiver",
    width: 120,
  },
  {
    title: "收货人电话",
    dataIndex: "recieverPhone",
    width: 120,
  },
  {
    title: "收货地点",
    dataIndex: "receivingLocation",
    width: 120,
  },
  {
    title: "收货区域编码",
    dataIndex: "receivingAreaCode",
    width: 120,
  },
  {
    title: "货运物流中转信息",
    dataIndex: "freightLogisticsTransferInformation",
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
  {
    title: "时间单位",
    dataIndex: "timeUnit",
    width: 120,
  },
  {
    title: "运输数量",
    dataIndex: "transportationQuantity",
    width: 120,
  },
  {
    title: "货运批次号",
    dataIndex: "batchNumber",
    width: 120,
  },
  {
    title: "货运单位",
    dataIndex: "shippingUnit",
    width: 120,
  },
  {
    title: "货运单号",
    dataIndex: "oddNumbers",
    width: 120,
  },
  {
    title: "承运商ID",
    dataIndex: "companyId",
    width: 120,
  },
  {
    title: "自定义拓展字段JSON结构",
    dataIndex: "extendField",
    width: 120,
  },
  {
    title: "订单ID",
    dataIndex: "orderId",
    width: 120,
  },
  {
    title: "业务类型",
    dataIndex: "businessType",
    width: 120,
  },
];
//todo 查询条件暂时用来装样子，后面增加配置条件后修改模版
export const searchFormSchema: FormSchema[] = [
  {
    field: "materialId",
    label: "产品编号",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "dateManufacture",
    label: "生产日期",
    component: "Input",
    colProps: { lg: 4, md: 5 },
  },
  {
    field: "productionBatch",
    label: "生产批次",
    component: "Input",
    colProps: { lg: 4, md: 5 },
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
    field: "materialId",
    label: "产品编号",
    component: "Input",
    required: true,
  },
  {
    field: "dateManufacture",
    label: "生产日期",
    component: "Input",
  },
  {
    field: "productionBatch",
    label: "生产批次",
    component: "Input",
  },
  {
    field: "manufacturer",
    label: "生产厂家",
    component: "Input",
  },
  {
    field: "deliveryTime",
    label: "发货时间",
    component: "Input",
  },
  {
    field: "forwardingUnit",
    label: "发货单位",
    component: "Input",
  },
  {
    field: "shipper",
    label: "发货人",
    component: "Input",
  },
  {
    field: "shipperPhoneNumber",
    label: "发货人电话",
    component: "Input",
  },
  {
    field: "shippingLocation",
    label: "发货地点",
    component: "Input",
  },
  {
    field: "shippingAreaCode",
    label: "发货区域编码",
    component: "Input",
  },
  {
    field: "receivingTime",
    label: "收货时间",
    component: "Input",
  },
  {
    field: "consignee",
    label: "收货单位",
    component: "Input",
  },
  {
    field: "receiver",
    label: "收货人",
    component: "Input",
  },
  {
    field: "recieverPhone",
    label: "收货人电话",
    component: "Input",
  },
  {
    field: "receivingLocation",
    label: "收货地点",
    component: "Input",
  },
  {
    field: "receivingAreaCode",
    label: "收货区域编码",
    component: "Input",
  },
  {
    field: "freightLogisticsTransferInformation",
    label: "货运物流中转信息",
    component: "Input",
  },
  {
    field: "modeTransport",
    label: "运输方式",
    component: "Input",
  },
  {
    field: "transportationPrice",
    label: "运输价格",
    component: "Input",
  },
  {
    field: "transportationTime",
    label: "运输时间",
    component: "Input",
  },
  {
    field: "timeUnit",
    label: "时间单位",
    component: "Input",
  },
  {
    field: "transportationQuantity",
    label: "运输数量",
    component: "Input",
  },
  {
    field: "batchNumber",
    label: "货运批次号",
    component: "Input",
  },
  {
    field: "shippingUnit",
    label: "货运单位",
    component: "Input",
  },
  {
    field: "oddNumbers",
    label: "货运单号",
    component: "Input",
  },
  {
    field: "companyId",
    label: "承运商",
    component: "Select",
  },
  {
    field: "extendField",
    label: "自定义拓展字段JSON结构",
    component: "Input",
  },
  {
    field: "orderId",
    label: "订单ID",
    component: "Input",
  },
  {
    field: "businessType",
    label: "业务类型",
    component: "Select",
    componentProps: {
      options: [
        { label: "采购", value: 1 },
        {
          label: "销售",
          value: 2,
        },
      ],
    },
  },
];
