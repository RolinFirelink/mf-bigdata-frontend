import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 批发市场表
 * @author cgli
 * @date: 2023-08-18
 * @version: V1.0.0
 */
export interface ProductMarket extends BaseEntity<number> {
  market: string;
  recordDate: string;
  flag: number;
  areaCode: string;
  lat: number;
  lng: number;
  deleteFlag: number;
}

export interface ReqProductMarket {

}

export type ProductMarketPageModel = PageResult<ProductMarket>;
