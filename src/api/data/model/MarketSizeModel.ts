import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 市场规模
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
export interface MarketSize extends BaseEntity<number> {
  flag: number;
  marketSize: number;
  year: number;
}

export interface ReqMarketSize {}

export type MarketSizePageModel = PageResult<MarketSize>;
