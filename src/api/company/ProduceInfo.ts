/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-05 20:19:07
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 16:44:21
 * @FilePath: \mf-bigdata-frontend\src\api\company\ProduceInfo.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

/**
 * 上传excel数据
 *
 * @param params 文件数据
 * @return
 */
export function uploadExcel(params) {
  return defHttp.upload(
    {
      url: Api.ProduceInfo + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteProduceInfo(ids: string) {
  return defHttp.delete<ProduceInfo>(
    { url: Api.ProduceInfo + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
