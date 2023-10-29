/**
 * @description: 惠农网广东月供应数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  SupplyDataGuangDong,
  ReqSupplyDataGuangDong,
  SupplyDataGuangDongPageModel,
} from "/@/api/docking/model/SupplyDataGuangDongModel";

enum Api {
  SupplyDataGuangDong = "/web/supplyDataGuangDong",
}

/**
 * 分页列表查询
 *
 * @param reqSupplyDataGuangDong
 * @return
 */
export const getSupplyDataGuangDongList = (reqSupplyDataGuangDong?: ReqSupplyDataGuangDong) => {
  return defHttp.get<SupplyDataGuangDongPageModel>({
    url: Api.SupplyDataGuangDong,
    params: reqSupplyDataGuangDong,
  });
};

/**
 * 新增惠农网广东月供应数据
 *
 * @param supplyDataGuangDong
 * @return
 */
export function insertSupplyDataGuangDong(supplyDataGuangDong: SupplyDataGuangDong) {
  return defHttp.post<SupplyDataGuangDong>(
    { url: Api.SupplyDataGuangDong, params: supplyDataGuangDong },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网广东月供应数据
 *
 * @param supplyDataGuangDong
 * @return
 */
export function updateSupplyDataGuangDong(supplyDataGuangDong: SupplyDataGuangDong) {
  return defHttp.put<SupplyDataGuangDong>(
    { url: Api.SupplyDataGuangDong, params: supplyDataGuangDong },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网广东月供应数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSupplyDataGuangDong(id: string) {
  return defHttp.delete<SupplyDataGuangDong>(
    { url: Api.SupplyDataGuangDong + "/" + id },
    { successMessageMode: "message" },
  );
}
