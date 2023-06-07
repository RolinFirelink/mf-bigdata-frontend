/**
 * @description: 页面配置
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ReportDashboard,
  ReqReportDashboard,
  ReportDashboardPageModel,
} from "/@/api/report/model/ReportDashboardModel";

enum Api {
  ReportDashboard = "/web/reportDashboard",
}

/**
 * 分页列表查询
 *
 * @param reqReportDashboard
 * @return
 */
export const getReportDashboardList = (reqReportDashboard?: ReqReportDashboard) => {
  return defHttp.get<ReportDashboardPageModel>({
    url: Api.ReportDashboard,
    params: reqReportDashboard,
  });
};

/**
 * 新增页面配置
 *
 * @param reportDashboard
 * @return
 */
export function insertReportDashboard(reportDashboard: ReportDashboard) {
  return defHttp.post<ReportDashboard>(
    { url: Api.ReportDashboard, params: reportDashboard },
    { successMessageMode: "message" },
  );
}

/**
 * 修改页面配置
 *
 * @param reportDashboard
 * @return
 */
export function updateReportDashboard(reportDashboard: ReportDashboard) {
  return defHttp.put<ReportDashboard>(
    { url: Api.ReportDashboard, params: reportDashboard },
    { successMessageMode: "message" },
  );
}

/**
 * 删除页面配置
 *
 * @param id 唯一ID
 * @return
 */
export function deleteReportDashboard(id: string) {
  return defHttp.delete<ReportDashboard>(
    { url: Api.ReportDashboard + "/" + id },
    { successMessageMode: "message" },
  );
}
