/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-12 14:45:34
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-12 14:47:53
 * @FilePath: \mf-bigdata-frontend\src\api\price\ProductPrice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 产品价格表
 * @author cgli
 * @date: 2023-07-12
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductPrice,
  ReqProductPrice,
  ProductPricePageModel,
} from "/@/api/price/model/ProductPriceModel";

enum Api {
  ProductPrice = "/web/productPrice",
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
 * 新增产品价格表
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
 * 修改产品价格表
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
 * 删除产品价格表
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