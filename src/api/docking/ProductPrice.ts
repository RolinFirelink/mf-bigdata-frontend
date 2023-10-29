/**
 * @description: 惠农网产品价格
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductPrice,
  ReqProductPrice,
  ProductPricePageModel,
} from "/@/api/docking/model/ProductPriceModel";

enum Api {
  ProductPrice = "/web/productPriceData",
}

/**
 * 分页列表查询
 *
 * @param reqProductPrice
 * @return
 */
export const getProductPriceList = (reqProductPrice?: ReqProductPrice) => {
  return defHttp.get<ProductPricePageModel>({ url: Api.ProductPrice, params: reqProductPrice });
};

/**
 * 新增惠农网产品价格
 *
 * @param productPrice
 * @return
 */
export function insertProductPrice(productPrice: ProductPrice) {
  return defHttp.post<ProductPrice>(
    { url: Api.ProductPrice, params: productPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网产品价格
 *
 * @param productPrice
 * @return
 */
export function updateProductPrice(productPrice: ProductPrice) {
  return defHttp.put<ProductPrice>(
    { url: Api.ProductPrice, params: productPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网产品价格
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductPrice(id: string) {
  return defHttp.delete<ProductPrice>(
    { url: Api.ProductPrice + "/" + id },
    { successMessageMode: "message" },
  );
}
