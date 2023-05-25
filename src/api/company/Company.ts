/**
 * @description: 企业、供货商、销售商和承运商
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Company, ReqCompany, CompanyPageModel } from "/@/api/company/model/CompanyModel";

enum Api {
  Company = "/web/company",
}

/**
 * 分页列表查询
 *
 * @param reqCompany
 * @return
 */
export const getCompanyList = (reqCompany?: ReqCompany) => {
  return defHttp.get<CompanyPageModel>({ url: Api.Company, params: reqCompany });
};

/**
 * 新增企业、供货商、销售商和承运商
 *
 * @param company
 * @return
 */
export function insertCompany(company: Company) {
  return defHttp.post<Company>(
    { url: Api.Company, params: company },
    { successMessageMode: "message" },
  );
}

/**
 * 修改企业、供货商、销售商和承运商
 *
 * @param company
 * @return
 */
export function updateCompany(company: Company) {
  return defHttp.put<Company>(
    { url: Api.Company, params: company },
    { successMessageMode: "message" },
  );
}

/**
 * 删除企业、供货商、销售商和承运商
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCompany(id: string) {
  return defHttp.delete<Company>(
    { url: Api.Company + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 获取企业列表选项
 *
 * @return
 */
export const getCompanyOptions = () => {
  return defHttp.get<CompanyPageModel>({ url: Api.Company + "?companyType=1" });
};
