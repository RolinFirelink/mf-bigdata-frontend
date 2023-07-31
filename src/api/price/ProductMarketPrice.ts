/**
 * @description: 产品批发价格表
 * @author cgli
 * @date: 2023-07-12
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductMarketPrice,
  ReqProductMarketPrice,
  ProductMarketPricePageModel,
} from "/@/api//price/model/ProductMarketPriceModel";

enum Api {
  ProductMarketPrice = "/web/productMarketPrice",
}

/**
 * 分页列表查询
 *
 * @param reqProductMarketPrice
 * @return
 */
export const getProductMarketPriceList = (reqProductMarketPrice?: ReqProductMarketPrice) => {
  return defHttp.get<ProductMarketPricePageModel>({
    url: Api.ProductMarketPrice,
    params: reqProductMarketPrice,
  });
};

/**
 * 新增产品批发价格表
 *
 * @param productMarketPrice
 * @return
 */
export function insertProductMarketPrice(productMarketPrice: ProductMarketPrice) {
  return defHttp.post<ProductMarketPrice>(
    { url: Api.ProductMarketPrice, params: productMarketPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品批发价格表
 *
 * @param productMarketPrice
 * @return
 */
export function updateProductMarketPrice(productMarketPrice: ProductMarketPrice) {
  return defHttp.put<ProductMarketPrice>(
    { url: Api.ProductMarketPrice, params: productMarketPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品批发价格表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductMarketPrice(id: string) {
  return defHttp.delete<ProductMarketPrice>(
    { url: Api.ProductMarketPrice + "/" + id },
    { successMessageMode: "message" },
  );
}
