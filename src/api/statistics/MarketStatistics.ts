/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-17 10:24:32
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-17 10:32:30
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\MarketStatistics.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 市场行情统计表
 * @author cgli
 * @date: 2023-07-17
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MarketStatistics,
  ReqMarketStatistics,
  MarketStatisticsPageModel,
} from "/@/api/statistics/model/MarketStatisticsModel";

enum Api {
  MarketStatistics = "/web/marketStatistics",
}

/**
 * 分页列表查询
 *
 * @param reqMarketStatistics
 * @return
 */
export const getMarketStatisticsList = (reqMarketStatistics?: ReqMarketStatistics) => {
  return defHttp.get<MarketStatisticsPageModel>({
    url: Api.MarketStatistics,
    params: reqMarketStatistics,
  });
};

/**
 * 新增市场行情统计表
 *
 * @param marketStatistics
 * @return
 */
export function insertMarketStatistics(marketStatistics: MarketStatistics) {
  return defHttp.post<MarketStatistics>(
    { url: Api.MarketStatistics, params: marketStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 修改市场行情统计表
 *
 * @param marketStatistics
 * @return
 */
export function updateMarketStatistics(marketStatistics: MarketStatistics) {
  return defHttp.put<MarketStatistics>(
    { url: Api.MarketStatistics, params: marketStatistics },
    { successMessageMode: "message" },
  );
}

/**
 * 删除市场行情统计表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMarketStatistics(id: string) {
  return defHttp.delete<MarketStatistics>(
    { url: Api.MarketStatistics + "/" + id },
    { successMessageMode: "message" },
  );
}
