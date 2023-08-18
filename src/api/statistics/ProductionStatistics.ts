/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-15 17:51:04
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 17:10:02
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\ProductionStatistics.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 生产统计
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductionStatistics,
  ReqProductionStatistics,
  ProductionStatisticsPageModel,
} from "/@/api/statistics/model/ProductionStatisticsModel";

enum Api {
  ProductionStatistics = "/web/productionStatistics",
}

/**
 * 分页列表查询
 *
 * @param reqProductionStatistics
 * @return
 */
export const getProductionStatisticsList = (reqProductionStatistics?: ReqProductionStatistics) => {
  return defHttp.get<ProductionStatisticsPageModel>({
    url: Api.ProductionStatistics,
    params: reqProductionStatistics,
  });
};

/**
 * 新增生产统计
 *
 * @param productionStatistics
 * @return
 */
export function insertProductionStatistics(productionStatistics: ProductionStatistics) {
  return defHttp.post<ProductionStatistics>(
    { url: Api.ProductionStatistics, params: productionStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 修改生产统计
 *
 * @param productionStatistics
 * @return
 */
export function updateProductionStatistics(productionStatistics: ProductionStatistics) {
  return defHttp.put<ProductionStatistics>(
    { url: Api.ProductionStatistics, params: productionStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 删除生产统计
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductionStatistics(id: string) {
  return defHttp.delete<ProductionStatistics>(
    { url: Api.ProductionStatistics + "/" + id },
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
    { url: Api.ProductionStatistics + "/excelUpload", params },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteProductionStatistics(ids: string) {
  return defHttp.delete<ProductionStatistics>(
    { url: Api.ProductionStatistics + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
