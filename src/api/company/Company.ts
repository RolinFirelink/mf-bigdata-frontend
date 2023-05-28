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
 * 获取供应商列表选项
 *
 * @return
 */
export const getCompanyOptions = (companyType) => {
  return defHttp.get<CompanyPageModel>({ url: Api.Company + `/options/${companyType}` });
};

/**
 * 批量删除
 *
 * @param ids id列表字符串
 * @return
 */
export function bastchdeleteCompany(ids: string) {
  return defHttp.delete<Company>(
    { url: Api.Company + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
