/**
 * @description: 省份供应表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProvinceSupply,
  ReqProvinceSupply,
  ProvinceSupplyPageModel,
} from "/@/api/statistics/model/ProvinceSupplyModel";

enum Api {
  ProvinceSupply = "/web/provinceSupply",
}

/**
 * 分页列表查询
 *
 * @param reqProvinceSupply
 * @return
 */
export const getProvinceSupplyList = (reqProvinceSupply?: ReqProvinceSupply) => {
  return defHttp.get<ProvinceSupplyPageModel>({
    url: Api.ProvinceSupply,
    params: reqProvinceSupply,
  });
};

/**
 * 新增省份供应表
 *
 * @param provinceSupply
 * @return
 */
export function insertProvinceSupply(provinceSupply: ProvinceSupply) {
  return defHttp.post<ProvinceSupply>(
    { url: Api.ProvinceSupply, params: provinceSupply },
    { successMessageMode: "message" },
  );
}

/**
 * 修改省份供应表
 *
 * @param provinceSupply
 * @return
 */
export function updateProvinceSupply(provinceSupply: ProvinceSupply) {
  return defHttp.put<ProvinceSupply>(
    { url: Api.ProvinceSupply, params: provinceSupply },
    { successMessageMode: "message" },
  );
}

/**
 * 删除省份供应表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProvinceSupply(id: string) {
  return defHttp.delete<ProvinceSupply>(
    { url: Api.ProvinceSupply + "/" + id },
    { successMessageMode: "message" },
  );
}
