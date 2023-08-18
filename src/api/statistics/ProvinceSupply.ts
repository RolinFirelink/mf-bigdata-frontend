/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-15 18:14:52
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 17:17:27
 * @FilePath: \mf-bigdata-frontend\src\api\statistics\ProvinceSupply.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

/**
 *
 * @param params
 * @returns
 */
export function uploadExcel(params) {
  return defHttp.upload(
    { url: Api.ProvinceSupply + "/excelUpload", params },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteProvinceSupply(ids: string) {
  return defHttp.delete<ProvinceSupply>(
    { url: Api.ProvinceSupply + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
