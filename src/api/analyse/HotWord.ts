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
