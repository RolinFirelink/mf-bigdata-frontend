/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-05 20:19:07
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-06 17:19:00
 * @FilePath: \mf-bigdata-frontend\src\api\price\productMarketPrice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

/**
 * 上传excel数据
 *
 * @param params 文件数据
 * @return
 */
export function uploadExcel(params) {
  return defHttp.upload(
    {
      url: Api.ProductMarketPrice + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
