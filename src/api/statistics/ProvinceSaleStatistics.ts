/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-15 18:53:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 17:14:02
 * @FilePath: \mf-bigdata-frontend\src\api\order\ProvinceSaleStatistics.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 省份销售数据
 * @author cgli
 * @date: 2023-07-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProvinceSaleStatistics,
  ReqProvinceSaleStatistics,
  ProvinceSaleStatisticsPageModel,
} from "/@/api/statistics/model/ProvinceSaleStatisticsModel";

enum Api {
  ProvinceSaleStatistics = "/web/provinceSaleStatistics",
}

/**
 * 分页列表查询
 *
 * @param reqProvinceSaleStatistics
 * @return
 */
export const getProvinceSaleStatisticsList = (
  reqProvinceSaleStatistics?: ReqProvinceSaleStatistics,
) => {
  return defHttp.get<ProvinceSaleStatisticsPageModel>({
    url: Api.ProvinceSaleStatistics,
    params: reqProvinceSaleStatistics,
  });
};

/**
 * 新增省份销售数据
 *
 * @param provinceSaleStatistics
 * @return
 */
export function insertProvinceSaleStatistics(provinceSaleStatistics: ProvinceSaleStatistics) {
  return defHttp.post<ProvinceSaleStatistics>(
    { url: Api.ProvinceSaleStatistics, params: provinceSaleStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 修改省份销售数据
 *
 * @param provinceSaleStatistics
 * @return
 */
export function updateProvinceSaleStatistics(provinceSaleStatistics: ProvinceSaleStatistics) {
  return defHttp.put<ProvinceSaleStatistics>(
    { url: Api.ProvinceSaleStatistics, params: provinceSaleStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 删除省份销售数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProvinceSaleStatistics(id: string) {
  return defHttp.delete<ProvinceSaleStatistics>(
    { url: Api.ProvinceSaleStatistics + "/" + id },
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
    { url: Api.ProvinceSaleStatistics + "/excelUpload", params },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteProvinceSaleStatistics(ids: string) {
  return defHttp.delete<ProvinceSaleStatistics>(
    { url: Api.ProvinceSaleStatistics + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
