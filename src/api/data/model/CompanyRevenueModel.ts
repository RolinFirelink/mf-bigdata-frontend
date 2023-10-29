import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 公司营收
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
export interface CompanyRevenue extends BaseEntity<number> {
  flag: number;
  companyName: string;
  companyRevenue: number;
  year: number;
}

export interface ReqCompanyRevenue {}

export type CompanyRevenuePageModel = PageResult<CompanyRevenue>;
