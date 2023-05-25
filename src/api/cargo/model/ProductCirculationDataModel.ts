import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 货运表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface ProductCirculationData extends BaseEntity<number> {
  materialId: number;
  dateManufacture: string;
  productionBatch: string;
  manufacturer: string;
  deliveryTime: string;
  forwardingUnit: string;
  shipper: string;
  shipperPhoneNumber: string;
  shippingLocation: string;
  shippingAreaCode: string;
  receivingTime: string;
  consignee: string;
  receiver: string;
  recieverPhone: string;
  receivingLocation: string;
  receivingAreaCode: string;
  freightLogisticsTransferInformation: string;
  modeTransport: string;
  transportationPrice: number;
  transportationTime: number;
  timeUnit: string;
  transportationQuantity: number;
  batchNumber: string;
  shippingUnit: string;
  oddNumbers: string;
  companyId: number;
  extendField: string;
  deleteFlag: number;
  orderId: number;
  businessType: number;
}

export interface ReqProductCirculationData {

}

export type ProductCirculationDataPageModel = PageResult<ProductCirculationData>;
