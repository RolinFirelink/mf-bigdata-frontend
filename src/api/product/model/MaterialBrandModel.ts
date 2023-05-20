import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export interface MaterialBrand extends BaseEntity<number> {
  deletedFlag: number;
  name: string;
  description: string;
  values: string;
  website: string;
  establishedDate: string;
  flag: number;
  companyName: string;
  companyId: number;
}

export type MaterialBrandPageModel = PageResult<MaterialBrand>;
