import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 订单数据主表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface Order extends BaseEntity<number> {
  companyId: number;
  companyNo: string;
  companyName: string;
  customerId: number;
  customerNo: string;
  customerName: string;
  orderChannel: number;
  category: number;
  orderStatus: number;
  orderCreateTime: string;
  completeFlag: number;
  orderCompleteTime: string;
  totalSales: number;
  orderLocation: string;
  flag: number;
  remark: string;
  extendField: string;
  enableBatchNumber: number;
  deleteFlag: number;
}

export interface ReqOrder {
  category: number;
}

export type OrderPageModel = PageResult<Order>;
