import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品属性表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export interface MaterialAttribute extends BaseEntity<number> {
  attributeField: string;
  attributeName: string;
  attributeValue: string;
  orgId: number;
  deletedFlag: number;
  flag: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqMaterialAttribute {}

export type MaterialAttributePageModel = PageResult<MaterialAttribute>;
