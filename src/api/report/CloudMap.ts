/**
 * @description: 报表页面
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { CloudMap, ReqCloudMap, CloudMapPageModel } from "/@/api/report/model/CloudMapModel";

enum Api {
  CloudMap = "/web/cloudMap",
}

/**
 * 分页列表查询
 *
 * @param reqCloudMap
 * @return
 */
export const getCloudMapList = (reqCloudMap?: ReqCloudMap) => {
  return defHttp.get<CloudMapPageModel>({ url: Api.CloudMap, params: reqCloudMap });
};

/**
 * 新增报表页面
 *
 * @param cloudMap
 * @return
 */
export function insertCloudMap(cloudMap: CloudMap) {
  return defHttp.post<CloudMap>(
    { url: Api.CloudMap, params: cloudMap },
    { successMessageMode: "message" },
  );
}

/**
 * 修改报表页面
 *
 * @param cloudMap
 * @return
 */
export function updateCloudMap(cloudMap: CloudMap) {
  return defHttp.put<CloudMap>(
    { url: Api.CloudMap, params: cloudMap },
    { successMessageMode: "message" },
  );
}

/**
 * 删除报表页面
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCloudMap(id: string) {
  return defHttp.delete<CloudMap>(
    { url: Api.CloudMap + "/" + id },
    { successMessageMode: "message" },
  );
}
