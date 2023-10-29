/**
 * @description: 公司营收
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  CompanyRevenue,
  ReqCompanyRevenue,
  CompanyRevenuePageModel,
} from "/@/api/data/model/CompanyRevenueModel";

enum Api {
  CompanyRevenue = "/web/companyRevenue",
}

/**
 * 分页列表查询
 *
 * @param reqCompanyRevenue
 * @return
 */
export const getCompanyRevenueList = (reqCompanyRevenue?: ReqCompanyRevenue) => {
  return defHttp.get<CompanyRevenuePageModel>({
    url: Api.CompanyRevenue,
    params: reqCompanyRevenue,
  });
};

/**
 * 新增公司营收
 *
 * @param companyRevenue
 * @return
 */
export function insertCompanyRevenue(companyRevenue: CompanyRevenue) {
  return defHttp.post<CompanyRevenue>(
    { url: Api.CompanyRevenue, params: companyRevenue },
    { successMessageMode: "message" },
  );
}

/**
 * 修改公司营收
 *
 * @param companyRevenue
 * @return
 */
export function updateCompanyRevenue(companyRevenue: CompanyRevenue) {
  return defHttp.put<CompanyRevenue>(
    { url: Api.CompanyRevenue, params: companyRevenue },
    { successMessageMode: "message" },
  );
}

/**
 * 删除公司营收
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCompanyRevenue(id: string) {
  return defHttp.delete<CompanyRevenue>(
    { url: Api.CompanyRevenue + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除公司营收
 *
 * @param ids id列表
 * @return
 */
export function bathchDeleteCompanyRevenue(ids: string) {
  return defHttp.delete<CompanyRevenue>(
    { url: Api.CompanyRevenue + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
