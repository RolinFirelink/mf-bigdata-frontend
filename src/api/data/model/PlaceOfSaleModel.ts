import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 销售地表
 * @author cgli
 * @date: 2023-08-18
 * @version: V1.0.0
 */
export interface PlaceOfSale extends BaseEntity<number> {
  placeOfSale: string;
  recordDate: string;
  flag: number;
  areaCode: string;
  lat: number;
  lng: number;
}

export interface ReqPlaceOfSale {}

export type PlaceOfSalePageModel = PageResult<PlaceOfSale>;
