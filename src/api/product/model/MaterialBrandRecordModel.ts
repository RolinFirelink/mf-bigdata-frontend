import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 品牌产品中间表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export interface MaterialBrandRecord extends BaseEntity<number> {
  brandId: number;
  materialId: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqMaterialBrandRecord {}

export type MaterialBrandRecordPageModel = PageResult<MaterialBrandRecord>;
