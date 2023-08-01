import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品批发价格表
 * @author cgli
 * @date: 2023-07-12
 * @version: V1.0.0
 */
export interface ProductMarketPrice extends BaseEntity<number> {
  market: string;
  recordDate: string;
  bottomPrice: number;
  topPrice: number;
  averagePrice: number;
  name: string;
  flag: number;
  unit: string;
}

export interface ReqProductMarketPrice {}

export type ProductMarketPricePageModel = PageResult<ProductMarketPrice>;
