/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-14 14:22:47
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-15 13:42:29
 * @FilePath: \mf-bigdata-frontend\src\api\sys\DictItem.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 字典项
 * @author: cgli
 * @Date: 2023-01-03
 * @Version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { DictItem, ReqDictItem, DictItemPageModel } from "/@/api/sys/model/DictItemModel";

enum Api {
  DictItem = "/sys/dictItem",
}

/**
 * 分页列表查询
 *
 * @param reqDictItem
 * @return
 */
export const getDictItemList = (reqDictItem?: ReqDictItem) => {
  return defHttp.get<DictItemPageModel>({ url: Api.DictItem, params: reqDictItem });
};

/**
 * 通过字典编码获取字典项目
 * @param dictCode
 */
export const getDictItems = (dictCode: string) => {
  return defHttp.get<DictItem[]>({ url: Api.DictItem + "/" + dictCode });
};

/**
 * 新增字典项
 *
 * @param dictItem
 * @return
 */
export function insertDictItem(dictItem: DictItem) {
  return defHttp.post<DictItem>(
    { url: Api.DictItem, params: dictItem },
    { successMessageMode: "message" },
  );
}

/**
 * 修改字典项
 *
 * @param dictItem
 * @return
 */
export function updateDictItem(dictItem: DictItem) {
  return defHttp.put<DictItem>(
    { url: Api.DictItem, params: dictItem },
    { successMessageMode: "message" },
  );
}

/**
 * 删除字典项
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDictItem(id: string) {
  return defHttp.delete<DictItem>(
    { url: Api.DictItem + "/" + id },
    { successMessageMode: "message" },
  );
}

export function getDictItemByCodeAndValue(dictCode: string, dictValue: string) {
  return defHttp.get<DictItem>({ url: Api.DictItem + "/" + dictCode + "/" + dictValue });
}
