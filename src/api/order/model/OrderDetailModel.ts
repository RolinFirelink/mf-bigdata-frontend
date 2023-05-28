import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 订单数据明细表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface OrderDetail extends BaseEntity<number> {
  orderId: number;
  materialId: string;
  materialName: string;
  salesQuantity: number;
  salesAmount: number;
  unit: string;
  status: number;
  remark: string;
  deleteFlag: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqOrderDetail {}

export type OrderDetailPageModel = PageResult<OrderDetail>;
