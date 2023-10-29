import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网产品价格
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export interface ProductPrice extends BaseEntity<number> {
  product: string;
  flag: number;
  price: number;
  maxPrice: number;
  minPrice: number;
  unit: string;
  region: string;
  provinceName: string;
  cityName: string;
  areaName: string;
  collectdate: string;
  deleteFlag: number;
}

export interface ReqProductPrice {

}

export type ProductPricePageModel = PageResult<ProductPrice>;
