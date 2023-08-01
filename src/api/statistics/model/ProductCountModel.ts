import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 城市产品生产统计表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
export interface ProductCount extends BaseEntity<number> {
  flag: number;
  produce: string;
  city: string;
  productionScale: number;
  unit: string;
  time: string;
}

export interface ReqProductCount {
  flag: number;
  city: string;
  endTime: string;
  startTime: string;
}

export type ProductCountPageModel = PageResult<ProductCount>;
