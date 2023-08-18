/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-05 20:19:07
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 15:59:41
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\HotWord.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 热词表
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { HotWord, ReqHotWord, HotWordPageModel } from "/@/api/analyse/model/HotWordModel";

enum Api {
  HotWord = "/web/hotWord",
}

/**
 * 分页列表查询
 *
 * @param reqHotWord
 * @return
 */
export const getHotWordList = (reqHotWord?: ReqHotWord) => {
  return defHttp.get<HotWordPageModel>({ url: Api.HotWord, params: reqHotWord });
};

/**
 * 新增热词表
 *
 * @param hotWord
 * @return
 */
export function insertHotWord(hotWord: HotWord) {
  return defHttp.post<HotWord>(
    { url: Api.HotWord, params: hotWord },
    { successMessageMode: "message" },
  );
}

/**
 * 修改热词表
 *
 * @param hotWord
 * @return
 */
export function updateHotWord(hotWord: HotWord) {
  return defHttp.put<HotWord>(
    { url: Api.HotWord, params: hotWord },
    { successMessageMode: "message" },
  );
}

/**
 * 删除热词表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteHotWord(id: string) {
  return defHttp.delete<HotWord>(
    { url: Api.HotWord + "/" + id },
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
      url: Api.HotWord + "/excelUpload",
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
export function batchDeleteHotWord(ids: string) {
  return defHttp.delete<HotWord>(
    { url: Api.HotWord + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
