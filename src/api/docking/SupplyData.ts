/**
 * @description: 惠农网省份月供应数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  SupplyData,
  ReqSupplyData,
  SupplyDataPageModel,
} from "/@/api/docking/model/SupplyDataModel";

enum Api {
  SupplyData = "/web/supplyData",
}

/**
 * 分页列表查询
 *
 * @param reqSupplyData
 * @return
 */
export const getSupplyDataList = (reqSupplyData?: ReqSupplyData) => {
  return defHttp.get<SupplyDataPageModel>({ url: Api.SupplyData, params: reqSupplyData });
};

/**
 * 新增惠农网省份月供应数据
 *
 * @param supplyData
 * @return
 */
export function insertSupplyData(supplyData: SupplyData) {
  return defHttp.post<SupplyData>(
    { url: Api.SupplyData, params: supplyData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网省份月供应数据
 *
 * @param supplyData
 * @return
 */
export function updateSupplyData(supplyData: SupplyData) {
  return defHttp.put<SupplyData>(
    { url: Api.SupplyData, params: supplyData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网省份月供应数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSupplyData(id: string) {
  return defHttp.delete<SupplyData>(
    { url: Api.SupplyData + "/" + id },
    { successMessageMode: "message" },
  );
}
