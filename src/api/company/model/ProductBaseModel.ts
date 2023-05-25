import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品基地
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface ProductBase extends BaseEntity<number> {
  companyName: string;
  companyNo: string;
  contacts: string;
  contactPhone: string;
  email: string;
  areaName: string;
  areaCode: string;
  address: string;
  productType: string;
  enabled: number;
  deleteFlag: number;
  parentId: number;
  extendField: string;
  remark: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqProductBase {}

export type ProductBasePageModel = PageResult<ProductBase>;
