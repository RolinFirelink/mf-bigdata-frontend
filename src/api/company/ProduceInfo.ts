/**
 * @description: 企业生产信息表
 * @author cgli
 * @date: 2023-07-11
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { ProduceInfo, ReqProduceInfo, ProduceInfoPageModel } from "./model/ProduceInfoModel";

enum Api {
  ProduceInfo = "/web/produceInfo",
}

/**
 * 分页列表查询
 *
 * @param reqProduceInfo
 * @return
 */
export const getProduceInfoList = (reqProduceInfo?: ReqProduceInfo) => {
  return defHttp.get<ProduceInfoPageModel>({ url: Api.ProduceInfo, params: reqProduceInfo });
};

/**
 * 新增企业生产信息表
 *
 * @param produceInfo
 * @return
 */
export function insertProduceInfo(produceInfo: ProduceInfo) {
  return defHttp.post<ProduceInfo>(
    { url: Api.ProduceInfo, params: produceInfo },
    { successMessageMode: "message" },
  );
}

/**
 * 修改企业生产信息表
 *
 * @param produceInfo
 * @return
 */
export function updateProduceInfo(produceInfo: ProduceInfo) {
  return defHttp.put<ProduceInfo>(
    { url: Api.ProduceInfo, params: produceInfo },
    { successMessageMode: "message" },
  );
}

/**
 * 删除企业生产信息表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProduceInfo(id: string) {
  return defHttp.delete<ProduceInfo>(
    { url: Api.ProduceInfo + "/" + id },
    { successMessageMode: "message" },
  );
}
