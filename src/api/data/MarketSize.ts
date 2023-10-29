/**
 * @description: 市场规模
 * @author cgli
 * @date: 2023-10-29
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { MarketSize, ReqMarketSize, MarketSizePageModel } from "/@/api/data/model/MarketSizeModel";

enum Api {
  MarketSize = "/web/marketSize",
}

/**
 * 分页列表查询
 *
 * @param reqMarketSize
 * @return
 */
export const getMarketSizeList = (reqMarketSize?: ReqMarketSize) => {
  return defHttp.get<MarketSizePageModel>({ url: Api.MarketSize, params: reqMarketSize });
};

/**
 * 新增市场规模
 *
 * @param marketSize
 * @return
 */
export function insertMarketSize(marketSize: MarketSize) {
  return defHttp.post<MarketSize>(
    { url: Api.MarketSize, params: marketSize },
    { successMessageMode: "message" },
  );
}

/**
 * 修改市场规模
 *
 * @param marketSize
 * @return
 */
export function updateMarketSize(marketSize: MarketSize) {
  return defHttp.put<MarketSize>(
    { url: Api.MarketSize, params: marketSize },
    { successMessageMode: "message" },
  );
}

/**
 * 删除市场规模
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMarketSize(id: string) {
  return defHttp.delete<MarketSize>(
    { url: Api.MarketSize + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除市场规模
 *
 * @param ids id列表
 * @return
 */
export function batchDeleteMarketSize(ids: string) {
  return defHttp.delete<MarketSize>(
    { url: Api.MarketSize + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
