import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品生产表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export interface MaterialProduce extends BaseEntity<number> {
  companyId: number;
  materialId: number;
  batch: number;
  productionScale: number;
  unit: string;
  deletedFlag: number;
  number: number;
  name: string;
  categoryId: number;
  productEstimat: number;
  marketEstimat: number;
  timeEstimat: string;
  baseId: number;
  quantity: number;
  isSell: number;
  flag: number;
}

export interface ReqMaterialProduce {

}

export type MaterialProducePageModel = PageResult<MaterialProduce>;
