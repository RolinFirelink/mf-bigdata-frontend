/**
 * @description: 惠农网省份月销售数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { SellData, ReqSellData, SellDataPageModel } from "/@/api/docking/model/SellDataModel";

enum Api {
  SellData = "/web/sellData",
}

/**
 * 分页列表查询
 *
 * @param reqSellData
 * @return
 */
export const getSellDataList = (reqSellData?: ReqSellData) => {
  return defHttp.get<SellDataPageModel>({ url: Api.SellData, params: reqSellData });
};

/**
 * 新增惠农网省份月销售数据
 *
 * @param sellData
 * @return
 */
export function insertSellData(sellData: SellData) {
  return defHttp.post<SellData>(
    { url: Api.SellData, params: sellData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网省份月销售数据
 *
 * @param sellData
 * @return
 */
export function updateSellData(sellData: SellData) {
  return defHttp.put<SellData>(
    { url: Api.SellData, params: sellData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网省份月销售数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSellData(id: string) {
  return defHttp.delete<SellData>(
    { url: Api.SellData + "/" + id },
    { successMessageMode: "message" },
  );
}
