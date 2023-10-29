import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网产品信息表
 * @author cgli
 * @date: 2023-09-26
 * @version: V1.0.0
 */
export interface MarketInfo extends BaseEntity<number> {
  dateMonth: string;
  cate1Id: number;
  cate1Name: string;
  cate2Id: number;
  cate2Name: string;
  cate3Id: number;
  cate3Name: string;
  searchDegree: number;
  purchaseDegree: number;
  saleDegree: number;
  tradeDegree: number;
  totalDegree: number;
  searchDegreeRatio: number;
  purchaseDegreeRatio: number;
  saleDegreeRatio: number;
  tradeDegreeRatio: number;
  totalDegreeRatio: number;
  searchDegreeTongRatio: number;
  purchaseDegreeTongRatio: number;
  saleDegreeTongRatio: number;
  tradeDegreeTongRatio: number;
  totalDegreeTongRatio: number;
  deleteFlag: number;
}

export interface ReqMarketInfo {

}

export type MarketInfoPageModel = PageResult<MarketInfo>;
