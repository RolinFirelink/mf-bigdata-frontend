import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 品牌产品中间表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export interface MaterialBrandRecord extends BaseEntity<number> {
  brandId: number;
  materialId: number;
}

export type MaterialBrandRecordPageModel = PageResult<MaterialBrandRecord>;
