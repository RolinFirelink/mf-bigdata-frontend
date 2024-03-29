/**
 * @description: 行政区域
 * @author cgli
 * @date: 2023-05-06
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Region, ReqRegion, RegionPageModel } from "/@/api/sys/model/RegionModel";

enum Api {
  Region = "/sys/region",
}

/**
 * 分页列表查询
 *
 * @param reqRegion
 * @return
 */
export const getRegionList = (reqRegion?: ReqRegion) => {
  return defHttp.get<RegionPageModel>({ url: Api.Region, params: reqRegion });
};

/**
 * 新增行政区域
 *
 * @param region
 * @return
 */
export function insertRegion(region: Region) {
  return defHttp.post<Region>(
    { url: Api.Region, params: region },
    { successMessageMode: "message" },
  );
}

/**
 * 修改行政区域
 *
 * @param region
 * @return
 */
export function updateRegion(region: Region) {
  return defHttp.put<Region>(
    { url: Api.Region, params: region },
    { successMessageMode: "message" },
  );
}

/**
 * 删除行政区域
 *
 * @param id 唯一ID
 * @return
 */
export function deleteRegion(id: string) {
  return defHttp.delete<Region>({ url: Api.Region + "/" + id }, { successMessageMode: "message" });
}

/**
 * 根据上级ID查询列表
 *
 * @param pid
 * @return
 */
export const listRegionByPid = (pid) => {
  return defHttp.get<Array<Region>>({ url: Api.Region + `/listByPid/${pid}` });
};

/**
 * 根据ID获取区域信息
 *
 * @param id
 * @return
 */
export const getRegionById = (id) => {
  return defHttp.get<Region>({ url: Api.Region + `/${id}` });
};
