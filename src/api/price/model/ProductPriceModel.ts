import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品价格表
 * @author cgli
 * @date: 2023-07-12
 * @version: V1.0.0
 */
export interface ProductPrice extends BaseEntity<number> {
  time: string;
  product: string;
  region: string;
  price: number;
  lifting: string;
  flag: number;
  unit: string;
}

export interface ProductPriceTrend {
  time: string;
  maxPrice: number;
  minPrice: number;
  avgPrice: number;
}

export interface ReqProductPrice {
  startTime: string;
  endTime: string;
  products?: string | undefined; //可选
  flag: number;
}

export type ProductPricePageModel = PageResult<ProductPrice>;
