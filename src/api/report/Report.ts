/**
 * @description: 报表页面
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Report, ReqReport, ReportPageModel } from "/@/api/report/model/ReportModel";

enum Api {
  Report = "/web/report",
}

/**
 * 分页列表查询
 *
 * @param reqReport
 * @return
 */
export const getReportList = (reqReport?: ReqReport) => {
  return defHttp.get<ReportPageModel>({ url: Api.Report, params: reqReport });
};

/**
 * 新增报表页面
 *
 * @param report
 * @return
 */
export function insertReport(report: Report) {
  return defHttp.post<Report>(
    { url: Api.Report, params: report },
    { successMessageMode: "message" },
  );
}

/**
 * 修改报表页面
 *
 * @param report
 * @return
 */
export function updateReport(report: Report) {
  return defHttp.put<Report>(
    { url: Api.Report, params: report },
    { successMessageMode: "message" },
  );
}

/**
 * 删除报表页面
 *
 * @param id 唯一ID
 * @return
 */
export function deleteReport(id: string) {
  return defHttp.delete<Report>({ url: Api.Report + "/" + id }, { successMessageMode: "message" });
}
