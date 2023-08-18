/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-18 11:51:52
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 13:38:46
 * @FilePath: \mf-bigdata-frontend\src\api\data\ProductMarket.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 批发市场表
 * @author cgli
 * @date: 2023-08-18
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductMarket,
  ReqProductMarket,
  ProductMarketPageModel,
} from "/@/api/data/model/ProductMarketModel";

enum Api {
  ProductMarket = "/web/productMarket",
}

/**
 * 分页列表查询
 *
 * @param reqProductMarket
 * @return
 */
export const getProductMarketList = (reqProductMarket?: ReqProductMarket) => {
  return defHttp.get<ProductMarketPageModel>({ url: Api.ProductMarket, params: reqProductMarket });
};

/**
 * 新增批发市场表
 *
 * @param productMarket
 * @return
 */
export function insertProductMarket(productMarket: ProductMarket) {
  return defHttp.post<ProductMarket>(
    { url: Api.ProductMarket, params: productMarket },
    { successMessageMode: "message" },
  );
}

/**
 * 修改批发市场表
 *
 * @param productMarket
 * @return
 */
export function updateProductMarket(productMarket: ProductMarket) {
  return defHttp.put<ProductMarket>(
    { url: Api.ProductMarket, params: productMarket },
    { successMessageMode: "message" },
  );
}

/**
 * 删除批发市场表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductMarket(id: string) {
  return defHttp.delete<ProductMarket>(
    { url: Api.ProductMarket + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteProductMarket(ids: string) {
  return defHttp.delete<ProductMarket>(
    { url: Api.ProductMarket + "/batch?ids=" + ids },
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
      url: Api.ProductMarket + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
