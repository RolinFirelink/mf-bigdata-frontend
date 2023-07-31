import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产地价格
 * @author cgli
 * @date: 2023-07-10
 * @version: V1.0.0
 */
export interface OriginPrice extends BaseEntity<number> {
  companyId: number;
  flag: number;
  cityCode: string;
  price: number;
  unit: string;
}

export interface ReqOriginPrice {}

export type OriginPricePageModel = PageResult<OriginPrice>;
