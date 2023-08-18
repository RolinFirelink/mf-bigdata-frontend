/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-17 10:52:22
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 16:54:52
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\CitySaleStatistics.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 城市销售量表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  CitySaleStatistics,
  ReqCitySaleStatistics,
  CitySaleStatisticsPageModel,
} from "/@/api/statistics/model/CitySaleStatisticsModel";

enum Api {
  CitySaleStatistics = "/web/citySaleStatistics",
}

/**
 * 分页列表查询
 *
 * @param reqCitySaleStatistics
 * @return
 */
export const getCitySaleStatisticsList = (reqCitySaleStatistics?: ReqCitySaleStatistics) => {
  return defHttp.get<CitySaleStatisticsPageModel>({
    url: Api.CitySaleStatistics,
    params: reqCitySaleStatistics,
  });
};

/**
 * 新增城市销售量表
 *
 * @param citySaleStatistics
 * @return
 */
export function insertCitySaleStatistics(citySaleStatistics: CitySaleStatistics) {
  return defHttp.post<CitySaleStatistics>(
    { url: Api.CitySaleStatistics, params: citySaleStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 修改城市销售量表
 *
 * @param citySaleStatistics
 * @return
 */
export function updateCitySaleStatistics(citySaleStatistics: CitySaleStatistics) {
  return defHttp.put<CitySaleStatistics>(
    { url: Api.CitySaleStatistics, params: citySaleStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 删除城市销售量表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCitySaleStatistics(id: string) {
  return defHttp.delete<CitySaleStatistics>(
    { url: Api.CitySaleStatistics + "/" + id },
    { successMessageMode: "message" },
  );
}

export function uploadExcel(params) {
  return defHttp.upload<CitySaleStatistics>(
    { url: Api.CitySaleStatistics + "/excelUpload", params },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteCitySaleStatistics(ids: string) {
  return defHttp.delete<CitySaleStatistics>(
    { url: Api.CitySaleStatistics + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
