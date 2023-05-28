/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Material, ReqMaterial, MaterialPageModel } from "/@/api/product/model/MaterialModel";

enum Api {
  Material = "/web/material",
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
  return defHttp.post<Material>(
    { url: Api.Material, params: material },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品表
 *
 * @param material
 * @return
 */
export function updateMaterial(material: Material) {
  return defHttp.put<Material>(
    { url: Api.Material, params: material },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterial(id: string) {
  return defHttp.delete<Material>(
    { url: Api.Material + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除产品
 *
 * @param ids
 * @return
 */
export function batchDeleteMaterial(ids: string) {
  return defHttp.delete<Material>(
    { url: Api.Material + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
