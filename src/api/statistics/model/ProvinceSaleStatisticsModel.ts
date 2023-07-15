import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 省份销售数据
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export interface ProvinceSaleStatistics extends BaseEntity<number> {
  province: string;
  averagePrice: number;
  sales: string;
  deleteFlag: number;
  statisticalTime: string;
}

export interface ReqProvinceSaleStatistics {}

export type ProvinceSaleStatisticsPageModel = PageResult<ProvinceSaleStatistics>;
