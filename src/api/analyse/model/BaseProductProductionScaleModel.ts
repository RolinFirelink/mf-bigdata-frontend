import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 基地产品生产规模数据表
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
export interface BaseProductProductionScale extends BaseEntity<number> {
  productionScale: number;
  baseId: number;
  scaleUnit: string;
  product: string;
  flag: number;
  statisticalTime: string;
  deleteFlag: number;
}

export interface ReqBaseProductProductionScale {}

export type BaseProductProductionScalePageModel = PageResult<BaseProductProductionScale>;
