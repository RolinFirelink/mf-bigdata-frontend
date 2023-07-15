import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 生产统计
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
export interface ProductionStatistics extends BaseEntity<number> {
  produceScale: number;
  yield: string;
  statisticalTime: string;
  flag: number;
  month: number;
  year: number;
  yieldUnit: string;
}

export interface ReqProductionStatistics {}

export type ProductionStatisticsPageModel = PageResult<ProductionStatistics>;
