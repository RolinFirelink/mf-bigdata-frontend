import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 地区生产宏观数据
 * @author cgli
 * @date: 2023-10-19
 * @version: V1.0.0
 */
export interface ProductionData extends BaseEntity<number> {
  flag: number;
  city: string;
  toMarketTime: string;
  product: string;
  value: number;
  value2: number;
  area: number;
  region: string;
  year: number;
  deleteFlag: number;
}

export interface ReqProductionData {}

export type ProductionDataPageModel = PageResult<ProductionData>;
