/**
 * @description: 产品属性表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { MaterialAttribute, ReqMaterialAttribute, MaterialAttributePageModel } from "/@/api/product/model/MaterialAttributeModel";

enum Api {
  MaterialAttribute = "/web/materialAttribute"
}

/**
 * 分页列表查询
 *
 * @param reqMaterialAttribute
 * @return
 */
export const getMaterialAttributeList = (reqMaterialAttribute?: ReqMaterialAttribute) => {
  return defHttp.get<MaterialAttributePageModel>({ url: Api.MaterialAttribute, params: reqMaterialAttribute });
};

/**
 * 新增产品属性表
 *
 * @param materialAttribute
 * @return
 */
export function insertMaterialAttribute(materialAttribute: MaterialAttribute) {
  return defHttp.post<MaterialAttribute>({ url: Api.MaterialAttribute, params: materialAttribute }, { successMessageMode: "message" });
};

/**
 * 修改产品属性表
 *
 * @param materialAttribute
 * @return
 */
export function updateMaterialAttribute(materialAttribute: MaterialAttribute) {
  return defHttp.put<MaterialAttribute>({ url: Api.MaterialAttribute, params: materialAttribute }, { successMessageMode: "message" });
};

/**
 * 删除产品属性表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterialAttribute(id: string) {
  return defHttp.delete<MaterialAttribute>({ url: Api.MaterialAttribute + "/" + id }, { successMessageMode: "message" });
};
