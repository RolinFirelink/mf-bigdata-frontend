/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-16 14:54:02
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 14:55:37
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\ProductCount.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 城市产品生产统计表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductCount,
  ReqProductCount,
  ProductCountPageModel,
} from "/@/api/statistics/model/ProductCountModel";

enum Api {
  ProductCount = "/web/productCount",
}

/**
 * 分页列表查询
 *
 * @param reqProductCount
 * @return
 */
export const getProductCountList = (reqProductCount?: ReqProductCount) => {
  return defHttp.get<ProductCountPageModel>({ url: Api.ProductCount, params: reqProductCount });
};

/**
 * 新增城市产品生产统计表
 *
 * @param productCount
 * @return
 */
export function insertProductCount(productCount: ProductCount) {
  return defHttp.post<ProductCount>(
    { url: Api.ProductCount, params: productCount },
    { successMessageMode: "message" },
  );
}

/**
 * 修改城市产品生产统计表
 *
 * @param productCount
 * @return
 */
export function updateProductCount(productCount: ProductCount) {
  return defHttp.put<ProductCount>(
    { url: Api.ProductCount, params: productCount },
    { successMessageMode: "message" },
  );
}

/**
 * 删除城市产品生产统计表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductCount(id: string) {
  return defHttp.delete<ProductCount>(
    { url: Api.ProductCount + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 *
 * @param params
 * @returns
 */
export function uploadExcel(params) {
  return defHttp.upload(
    { url: Api.ProductCount + "/excelUpload", params },
    { successMessageMode: "message" },
  );
}
