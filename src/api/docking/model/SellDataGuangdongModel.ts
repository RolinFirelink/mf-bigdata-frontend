import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网广东月销售数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export interface SellDataGuangdong extends BaseEntity<number> {
  date: string;
  flag: number;
  saleProvinceName: string;
  buyProvinceName: string;
  cntRatio: number;
  deleteFlag: number;
}

export interface ReqSellDataGuangdong {

}

export type SellDataGuangdongPageModel = PageResult<SellDataGuangdong>;
