import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 公司产品
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
export interface CompanyProduct extends BaseEntity<number> {
  flag: number;
  companyName: string;
  productName: string;
  productValue: number;
  productSales: number;
  dateOfManufacture: string;
}

export interface ReqCompanyProduct {}

export type CompanyProductPageModel = PageResult<CompanyProduct>;
