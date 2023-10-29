import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网批发市场数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export interface MarketPrice extends BaseEntity<number> {
  date: string;
  flag: number;
  avgPrice: number;
  marketName: string;
  unit: string;
  deleteFlag: number;
}

export interface ReqMarketPrice {

}

export type MarketPricePageModel = PageResult<MarketPrice>;
