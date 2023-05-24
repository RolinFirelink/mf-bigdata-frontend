import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 企业、供货商、销售商和承运商
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface Company extends BaseEntity<number> {
  companyName: string;
  companyNo: string;
  juridicalPerson: string;
  juridicalPhone: string;
  contacts: string;
  contactPhone: string;
  email: string;
  areaName: string;
  areaCode: string;
  address: string;
  companyType: number;
  productType: string;
  enabled: number;
  deleteFlag: number;
  extendField: string;
  remark: string;
}

export interface ReqCompany {
  companyType: number;
  productType: number;
}

export type CompanyPageModel = PageResult<Company>;
