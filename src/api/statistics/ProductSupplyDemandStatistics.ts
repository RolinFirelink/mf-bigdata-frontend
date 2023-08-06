/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-17 11:28:42
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-06 18:46:22
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\ProductSupplyDemandStatistics.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 产品供需统计表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductSupplyDemandStatistics,
  ReqProductSupplyDemandStatistics,
  ProductSupplyDemandStatisticsPageModel,
} from "/@/api/statistics/model/ProductSupplyDemandStatisticsModel";

enum Api {
  ProductSupplyDemandStatistics = "/web/productSupplyDemandStatistics",
}

/**
 * 分页列表查询
 *
 * @param reqProductSupplyDemandStatistics
 * @return
 */
export const getProductSupplyDemandStatisticsList = (
  reqProductSupplyDemandStatistics?: ReqProductSupplyDemandStatistics,
) => {
  return defHttp.get<ProductSupplyDemandStatisticsPageModel>({
    url: Api.ProductSupplyDemandStatistics,
    params: reqProductSupplyDemandStatistics,
  });
};

/**
 * 新增产品供需统计表
 *
 * @param productSupplyDemandStatistics
 * @return
 */
export function insertProductSupplyDemandStatistics(
  productSupplyDemandStatistics: ProductSupplyDemandStatistics,
) {
  return defHttp.post<ProductSupplyDemandStatistics>(
    { url: Api.ProductSupplyDemandStatistics, params: productSupplyDemandStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品供需统计表
 *
 * @param productSupplyDemandStatistics
 * @return
 */
export function updateProductSupplyDemandStatistics(
  productSupplyDemandStatistics: ProductSupplyDemandStatistics,
) {
  return defHttp.put<ProductSupplyDemandStatistics>(
    { url: Api.ProductSupplyDemandStatistics, params: productSupplyDemandStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品供需统计表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductSupplyDemandStatistics(id: string) {
  return defHttp.delete<ProductSupplyDemandStatistics>(
    { url: Api.ProductSupplyDemandStatistics + "/" + id },
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
    { url: Api.ProductSupplyDemandStatistics + "/excelUpload", params },
    { successMessageMode: "message" },
  );
}
