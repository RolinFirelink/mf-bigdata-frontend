/**
 * @description: 货运进度表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  FreightProgress,
  ReqFreightProgress,
  FreightProgressPageModel,
} from "/@/api/cargo/model/FreightProgressModel";

enum Api {
  FreightProgress = "/web/freightProgress",
}

/**
 * 分页列表查询
 *
 * @param reqFreightProgress
 * @return
 */
export const getFreightProgressList = (reqFreightProgress?: ReqFreightProgress) => {
  return defHttp.get<FreightProgressPageModel>({
    url: Api.FreightProgress,
    params: reqFreightProgress,
  });
};

/**
 * 新增货运进度表
 *
 * @param freightProgress
 * @return
 */
export function insertFreightProgress(freightProgress: FreightProgress) {
  return defHttp.post<FreightProgress>(
    { url: Api.FreightProgress, params: freightProgress },
    { successMessageMode: "message" },
  );
}

/**
 * 修改货运进度表
 *
 * @param freightProgress
 * @return
 */
export function updateFreightProgress(freightProgress: FreightProgress) {
  return defHttp.put<FreightProgress>(
    { url: Api.FreightProgress, params: freightProgress },
    { successMessageMode: "message" },
  );
}

/**
 * 删除货运进度表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteFreightProgress(id: string) {
  return defHttp.delete<FreightProgress>(
    { url: Api.FreightProgress + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除货运进度
 *
 * @param ids ID集合字符串
 * @return
 */
export function batchDeleteFreightProgress(ids: string) {
  return defHttp.delete<FreightProgress>(
    { url: Api.FreightProgress + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}

/**
 * 上传excel数据
 *
 * @param params 文件数据
 * @return
 */
export function uploadExcel(params) {
  return defHttp.upload(
    {
      url: Api.FreightProgress + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
