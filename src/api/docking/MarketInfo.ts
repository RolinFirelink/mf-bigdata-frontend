/**
 * @description: 惠农网产品信息表
 * @author cgli
 * @date: 2023-09-26
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MarketInfo,
  ReqMarketInfo,
  MarketInfoPageModel,
} from "/@/api/web/marketInfo/model/MarketInfoModel";

enum Api {
  MarketInfo = "/web/marketInfo",
}

/**
 * 分页列表查询
 *
 * @param reqMarketInfo
 * @return
 */
export const getMarketInfoList = (reqMarketInfo?: ReqMarketInfo) => {
  return defHttp.get<MarketInfoPageModel>({ url: Api.MarketInfo, params: reqMarketInfo });
};

/**
 * 新增惠农网产品信息表
 *
 * @param marketInfo
 * @return
 */
export function insertMarketInfo(marketInfo: MarketInfo) {
  return defHttp.post<MarketInfo>(
    { url: Api.MarketInfo, params: marketInfo },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网产品信息表
 *
 * @param marketInfo
 * @return
 */
export function updateMarketInfo(marketInfo: MarketInfo) {
  return defHttp.put<MarketInfo>(
    { url: Api.MarketInfo, params: marketInfo },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网产品信息表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMarketInfo(id: string) {
  return defHttp.delete<MarketInfo>(
    { url: Api.MarketInfo + "/" + id },
    { successMessageMode: "message" },
  );
}
