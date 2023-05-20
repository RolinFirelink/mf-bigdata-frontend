/**
 * @description: 产品类型表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MaterialCategory,
  ReqMaterialCategory,
  MaterialCategoryPageModel,
} from "/@/api/product/model/MaterialCategoryModel";

enum Api {
  MaterialCategory = "/material_category/materialCategory",
}

/**
 * 分页列表查询
 *
 * @param reqMaterialCategory
 * @return
 */
export const getMaterialCategoryList = (reqMaterialCategory?: ReqMaterialCategory) => {
  return defHttp.get<MaterialCategoryPageModel>({
    url: Api.MaterialCategory,
    params: reqMaterialCategory,
  });
};

/**
 * 新增产品类型表
 *
 * @param materialCategory
 * @return
 */
export function insertMaterialCategory(materialCategory: MaterialCategory) {
  return defHttp.post<MaterialCategory>(
    { url: Api.MaterialCategory, params: materialCategory },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品类型表
 *
 * @param materialCategory
 * @return
 */
export function updateMaterialCategory(materialCategory: MaterialCategory) {
  return defHttp.put<MaterialCategory>(
    { url: Api.MaterialCategory, params: materialCategory },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品类型表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterialCategory(id: string) {
  return defHttp.delete<MaterialCategory>(
    { url: Api.MaterialCategory + "/" + id },
    { successMessageMode: "message" },
  );
}
