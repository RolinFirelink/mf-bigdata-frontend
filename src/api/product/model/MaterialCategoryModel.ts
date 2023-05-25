import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品类型表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export interface MaterialCategory extends BaseEntity<number> {
  name: string;
  serialNo: string;
  categoryLevel: number;
  parentId: number;
  sort: string;
  remark: string;
  flag: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqMaterialCategory {}

export type MaterialCategoryPageModel = PageResult<MaterialCategory>;
