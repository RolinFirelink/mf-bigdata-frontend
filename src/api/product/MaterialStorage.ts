/**
 * @description: 产品库存表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
<<<<<<< HEAD
import {
  MaterialStorage,
  ReqMaterialStorage,
  MaterialStoragePageModel,
} from "/@/api/material_storage/model/MaterialStorageModel";

enum Api {
  MaterialStorage = "/material_storage/materialStorage",
=======
import { MaterialStorage, ReqMaterialStorage, MaterialStoragePageModel } from "/@/api/product/model/MaterialStorageModel";

enum Api {
  MaterialStorage = "/web/materialStorage"
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
}

/**
 * 分页列表查询
 *
 * @param reqMaterialStorage
 * @return
 */
export const getMaterialStorageList = (reqMaterialStorage?: ReqMaterialStorage) => {
  return defHttp.get<MaterialStoragePageModel>({
    url: Api.MaterialStorage,
    params: reqMaterialStorage,
  });
};

/**
 * 新增产品库存表
 *
 * @param materialStorage
 * @return
 */
export function insertMaterialStorage(materialStorage: MaterialStorage) {
  return defHttp.post<MaterialStorage>(
    { url: Api.MaterialStorage, params: materialStorage },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品库存表
 *
 * @param materialStorage
 * @return
 */
export function updateMaterialStorage(materialStorage: MaterialStorage) {
  return defHttp.put<MaterialStorage>(
    { url: Api.MaterialStorage, params: materialStorage },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品库存表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterialStorage(id: string) {
  return defHttp.delete<MaterialStorage>(
    { url: Api.MaterialStorage + "/" + id },
    { successMessageMode: "message" },
  );
}
