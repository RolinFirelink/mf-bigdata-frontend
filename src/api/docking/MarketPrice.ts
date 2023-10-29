/**
 * @description: 惠农网批发市场数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MarketPrice,
  ReqMarketPrice,
  MarketPricePageModel,
} from "/@/api/docking/model/MarketPriceModel";

enum Api {
  MarketPrice = "/web/marketPriceData",
}

/**
 * 分页列表查询
 *
 * @param reqMarketPrice
 * @return
 */
export const getMarketPriceList = (reqMarketPrice?: ReqMarketPrice) => {
  return defHttp.get<MarketPricePageModel>({ url: Api.MarketPrice, params: reqMarketPrice });
};

/**
 * 新增惠农网批发市场数据
 *
 * @param marketPrice
 * @return
 */
export function insertMarketPrice(marketPrice: MarketPrice) {
  return defHttp.post<MarketPrice>(
    { url: Api.MarketPrice, params: marketPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网批发市场数据
 *
 * @param marketPrice
 * @return
 */
export function updateMarketPrice(marketPrice: MarketPrice) {
  return defHttp.put<MarketPrice>(
    { url: Api.MarketPrice, params: marketPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网批发市场数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMarketPrice(id: string) {
  return defHttp.delete<MarketPrice>(
    { url: Api.MarketPrice + "/" + id },
    { successMessageMode: "message" },
  );
}
