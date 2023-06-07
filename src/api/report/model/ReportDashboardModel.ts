import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 页面配置
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
export interface ReportDashboard extends BaseEntity<number> {
  reportCode: string;
  title: string;
  width: number;
  height: number;
  backgroundColor: string;
  backgroundImage: string;
  presetLine: string;
  refreshSeconds: number;
  enableFlag: number;
  deleteFlag: number;
  sort: number;
  version: number;
}

export interface ReqReportDashboard {}

export type ReportDashboardPageModel = PageResult<ReportDashboard>;
