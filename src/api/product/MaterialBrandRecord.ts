/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MaterialBrandRecord,
  ReqMaterialBrandRecord,
  MaterialBrandRecordPageModel,
} from "/@/api/product/model/MaterialBrandRecordModel";

enum Api {
  MaterialBrand = "/web/materialBrandRecord",
}

/**
 * 分页列表查询
 *
 * @param reqMaterialBrand
 * @return
 */
export const getMaterialBrandRecordList = (reqMaterialBrand?: ReqMaterialBrandRecord) => {
  return defHttp.get<MaterialBrandRecordPageModel>({
    url: Api.MaterialBrand,
    params: reqMaterialBrand,
  });
};

/**
 * 新增产品品牌表
 *
 * @param materialBrand
 * @return
 */
export function insertMaterialBrandRecord(materialBrand: MaterialBrandRecord) {
  return defHttp.post<MaterialBrandRecord>(
    { url: Api.MaterialBrand, params: materialBrand },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品品牌表
 *
 * @param materialBrand
 * @return
 */
export function updateMaterialBrandRecord(materialBrand: MaterialBrandRecord) {
  return defHttp.put<MaterialBrandRecord>(
    { url: Api.MaterialBrand, params: materialBrand },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品品牌表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterialBrandRecord(id: string) {
  return defHttp.delete<MaterialBrandRecord>(
    { url: Api.MaterialBrand + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除产品品牌
 *
 * @param ids ID集合字符串
 * @return
 */
export function batchDeleteMaterialBrandRecord(ids: string) {
  return defHttp.delete<MaterialBrandRecord>(
    { url: Api.MaterialBrand + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
