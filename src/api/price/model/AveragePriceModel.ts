import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 均价表
 * @author cgli
 * @date: 2023-05-30
 * @version: V1.0.0
 */
export interface AveragePrice extends BaseEntity<number> {
  materialId: number;
  flag: number;
  price: number;
  unit: string;
  averageDate: string;
  place: string;
  deleteFlag: number;
}

export interface ReqAveragePrice {}

export type AveragePricePageModel = PageResult<AveragePrice>;
