import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 报表页面
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
export interface Report extends BaseEntity<number> {
  reportName: string;
  reportCode: string;
  reportGroup: string;
  reportType: string;
  reportImage: string;
  reportDesc: string;
  reportAuthor: string;
  downloadCount: number;
  enableFlag: number;
  deleteFlag: number;
  version: number;
}

export interface ReqReport {}

export type ReportPageModel = PageResult<Report>;
