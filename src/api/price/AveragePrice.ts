/**
 * @description: 均价表
 * @author cgli
 * @date: 2023-05-30
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  AveragePrice,
  ReqAveragePrice,
  AveragePricePageModel,
} from "/@/api/price/model/AveragePriceModel";

enum Api {
  AveragePrice = "/web/averagePrice",
}

/**
 * 分页列表查询
 *
 * @param reqAveragePrice
 * @return
 */
export const getAveragePriceList = (reqAveragePrice?: ReqAveragePrice) => {
  return defHttp.get<AveragePricePageModel>({ url: Api.AveragePrice, params: reqAveragePrice });
};

/**
 * 新增均价表
 *
 * @param averagePrice
 * @return
 */
export function insertAveragePrice(averagePrice: AveragePrice) {
  return defHttp.post<AveragePrice>(
    { url: Api.AveragePrice, params: averagePrice },
    { successMessageMode: "message" },
  );
}

/**
 * 修改均价表
 *
 * @param averagePrice
 * @return
 */
export function updateAveragePrice(averagePrice: AveragePrice) {
  return defHttp.put<AveragePrice>(
    { url: Api.AveragePrice, params: averagePrice },
    { successMessageMode: "message" },
  );
}

/**
 * 删除均价表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteAveragePrice(id: string) {
  return defHttp.delete<AveragePrice>(
    { url: Api.AveragePrice + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除均价表
 *
 * @param ids ID列表字符串
 * @return
 */
export function batchDeleteAveragePrice(ids: string) {
  return defHttp.delete<AveragePrice>(
    { url: Api.AveragePrice + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
