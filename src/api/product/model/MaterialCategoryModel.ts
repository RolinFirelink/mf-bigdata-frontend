import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品类型表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export interface MaterialCategory extends BaseEntity<number> {
  name: string;
  serialNo: string;
  categoryLevel: number;
  parentId: number;
  sort: string;
  remark: string;
  deletedFlag: number;
  orgId: number;
  flag: number;
}

export type MaterialCategoryPageModel = PageResult<MaterialCategory>;
