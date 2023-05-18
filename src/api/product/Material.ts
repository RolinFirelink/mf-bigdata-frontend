/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Material, ReqMaterial, MaterialPageModel } from "/@/api/product/model/MaterialModel";

enum Api {
  Material = "/material/material"
}

/**
 * 分页列表查询
 *
 * @param reqMaterial
 * @return
 */
export const getMaterialList = (reqMaterial?: ReqMaterial) => {
  return defHttp.get<MaterialPageModel>({ url: Api.Material, params: reqMaterial });
};

/**
 * 新增产品表
 *
 * @param material
 * @return
 */
export function insertMaterial(material: Material) {
  return defHttp.post<Material>({ url: Api.Material, params: material }, { successMessageMode: "message" });
};

/**
 * 修改产品表
 *
 * @param material
 * @return
 */
export function updateMaterial(material: Material) {
  return defHttp.put<Material>({ url: Api.Material, params: material }, { successMessageMode: "message" });
};

/**
 * 删除产品表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterial(id: string) {
  return defHttp.delete<Material>({ url: Api.Material + "/" + id }, { successMessageMode: "message" });
};