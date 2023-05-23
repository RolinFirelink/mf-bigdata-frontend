/**
 * @description: 品牌产品中间表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { MaterialBrandRecord, ReqMaterialBrandRecord, MaterialBrandRecordPageModel } from "/@/api/product/model/MaterialBrandRecordModel";

enum Api {
  MaterialBrandRecord = "/web/materialBrandRecord"
}

/**
 * 分页列表查询
 *
 * @param reqMaterialBrandRecord
 * @return
 */
export const getMaterialBrandRecordList = (reqMaterialBrandRecord?: ReqMaterialBrandRecord) => {
  return defHttp.get<MaterialBrandRecordPageModel>({ url: Api.MaterialBrandRecord, params: reqMaterialBrandRecord });
};

/**
 * 新增品牌产品中间表
 *
 * @param materialBrandRecord
 * @return
 */
export function insertMaterialBrandRecord(materialBrandRecord: MaterialBrandRecord) {
  return defHttp.post<MaterialBrandRecord>({ url: Api.MaterialBrandRecord, params: materialBrandRecord }, { successMessageMode: "message" });
};

/**
 * 修改品牌产品中间表
 *
 * @param materialBrandRecord
 * @return
 */
export function updateMaterialBrandRecord(materialBrandRecord: MaterialBrandRecord) {
  return defHttp.put<MaterialBrandRecord>({ url: Api.MaterialBrandRecord, params: materialBrandRecord }, { successMessageMode: "message" });
};

/**
 * 删除品牌产品中间表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterialBrandRecord(id: string) {
  return defHttp.delete<MaterialBrandRecord>({ url: Api.MaterialBrandRecord + "/" + id }, { successMessageMode: "message" });
};
