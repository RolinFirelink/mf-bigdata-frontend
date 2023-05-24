import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 订单数据明细表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface OrderDetail extends BaseEntity<number> {
  parentId: number;
  productId: number;
  productName: string;
  productAvatar: string;
  salesTime: string;
  salesQuantity: number;
  salesAmount: number;
  salesBatchNumber: number;
  unit: string;
  status: number;
  completeFlag: number;
  remark: string;
  extendField: string;
  enableBatchNumber: number;
  deleteFlag: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqOrderDetail {}

export type OrderDetailPageModel = PageResult<OrderDetail>;
