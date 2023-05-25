/**
 * @description: 产品基地
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductBase,
  ReqProductBase,
  ProductBasePageModel,
} from "/@/api/company/model/ProductBaseModel";

enum Api {
  ProductBase = "/web/productBase",
}

/**
 * 分页列表查询
 *
 * @param reqProductBase
 * @return
 */
export const getProductBaseList = (reqProductBase?: ReqProductBase) => {
  return defHttp.get<ProductBasePageModel>({ url: Api.ProductBase, params: reqProductBase });
};

/**
 * 新增产品基地
 *
 * @param productBase
 * @return
 */
export function insertProductBase(productBase: ProductBase) {
  return defHttp.post<ProductBase>(
    { url: Api.ProductBase, params: productBase },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品基地
 *
 * @param productBase
 * @return
 */
export function updateProductBase(productBase: ProductBase) {
  return defHttp.put<ProductBase>(
    { url: Api.ProductBase, params: productBase },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品基地
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductBase(id: string) {
  return defHttp.delete<ProductBase>(
    { url: Api.ProductBase + "/" + id },
    { successMessageMode: "message" },
  );
}
