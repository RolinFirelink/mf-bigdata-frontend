/**
 * @description: 惠农网广东月销售数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  SellDataGuangdong,
  ReqSellDataGuangdong,
  SellDataGuangdongPageModel,
} from "/@/api/docking/model/SellDataGuangdongModel";

enum Api {
  SellDataGuangdong = "/web/sellDataGuangdong",
}

/**
 * 分页列表查询
 *
 * @param reqSellDataGuangdong
 * @return
 */
export const getSellDataGuangdongList = (reqSellDataGuangdong?: ReqSellDataGuangdong) => {
  return defHttp.get<SellDataGuangdongPageModel>({
    url: Api.SellDataGuangdong,
    params: reqSellDataGuangdong,
  });
};

/**
 * 新增惠农网广东月销售数据
 *
 * @param sellDataGuangdong
 * @return
 */
export function insertSellDataGuangdong(sellDataGuangdong: SellDataGuangdong) {
  return defHttp.post<SellDataGuangdong>(
    { url: Api.SellDataGuangdong, params: sellDataGuangdong },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网广东月销售数据
 *
 * @param sellDataGuangdong
 * @return
 */
export function updateSellDataGuangdong(sellDataGuangdong: SellDataGuangdong) {
  return defHttp.put<SellDataGuangdong>(
    { url: Api.SellDataGuangdong, params: sellDataGuangdong },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网广东月销售数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSellDataGuangdong(id: string) {
  return defHttp.delete<SellDataGuangdong>(
    { url: Api.SellDataGuangdong + "/" + id },
    { successMessageMode: "message" },
  );
}
