/**
 * @description: 公司产品
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  CompanyProduct,
  ReqCompanyProduct,
  CompanyProductPageModel,
} from "/@/api/data/model/CompanyProductModel";

enum Api {
  CompanyProduct = "/web/companyProduct",
}

/**
 * 分页列表查询
 *
 * @param reqCompanyProduct
 * @return
 */
export const getCompanyProductList = (reqCompanyProduct?: ReqCompanyProduct) => {
  return defHttp.get<CompanyProductPageModel>({
    url: Api.CompanyProduct,
    params: reqCompanyProduct,
  });
};

/**
 * 新增公司产品
 *
 * @param companyProduct
 * @return
 */
export function insertCompanyProduct(companyProduct: CompanyProduct) {
  return defHttp.post<CompanyProduct>(
    { url: Api.CompanyProduct, params: companyProduct },
    { successMessageMode: "message" },
  );
}

/**
 * 修改公司产品
 *
 * @param companyProduct
 * @return
 */
export function updateCompanyProduct(companyProduct: CompanyProduct) {
  return defHttp.put<CompanyProduct>(
    { url: Api.CompanyProduct, params: companyProduct },
    { successMessageMode: "message" },
  );
}

/**
 * 删除公司产品
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCompanyProduct(id: string) {
  return defHttp.delete<CompanyProduct>(
    { url: Api.CompanyProduct + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除公司产品
 *
 * @param ids 唯一ID
 * @return
 */
export function batchDeleteCompanyProduct(ids: string) {
  return defHttp.delete<CompanyProduct>(
    { url: Api.CompanyProduct + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
