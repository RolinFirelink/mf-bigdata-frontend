/**
 * @description: 产品品牌表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MaterialBrand,
  ReqMaterialBrand,
  MaterialBrandPageModel,
} from "/@/api/product/model/MaterialBrandModel";

enum Api {
  MaterialBrand = "/material_brand/materialBrand",
}

/**
 * 分页列表查询
 *
 * @param reqMaterialBrand
 * @return
 */
export const getMaterialBrandList = (reqMaterialBrand?: ReqMaterialBrand) => {
  return defHttp.get<MaterialBrandPageModel>({ url: Api.MaterialBrand, params: reqMaterialBrand });
};

/**
 * 新增产品品牌表
 *
 * @param materialBrand
 * @return
 */
export function insertMaterialBrand(materialBrand: MaterialBrand) {
  return defHttp.post<MaterialBrand>(
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
export function updateMaterialBrand(materialBrand: MaterialBrand) {
  return defHttp.put<MaterialBrand>(
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
export function deleteMaterialBrand(id: string) {
  return defHttp.delete<MaterialBrand>(
    { url: Api.MaterialBrand + "/" + id },
    { successMessageMode: "message" },
  );
}
