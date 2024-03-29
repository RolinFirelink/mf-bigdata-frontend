/**
 * @description: 产品生产表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  MaterialProduce,
  ReqMaterialProduce,
  MaterialProducePageModel,
} from "/@/api/product/model/MaterialProduceModel";

enum Api {
  MaterialProduce = "/web/materialProduce",
}

/**
 * 分页列表查询
 *
 * @param reqMaterialProduce
 * @return
 */
export const getMaterialProduceList = (reqMaterialProduce?: ReqMaterialProduce) => {
  return defHttp.get<MaterialProducePageModel>({
    url: Api.MaterialProduce,
    params: reqMaterialProduce,
  });
};

/**
 * 新增产品生产表
 *
 * @param materialProduce
 * @return
 */
export function insertMaterialProduce(materialProduce: MaterialProduce) {
  return defHttp.post<MaterialProduce>(
    { url: Api.MaterialProduce, params: materialProduce },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品生产表
 *
 * @param materialProduce
 * @return
 */
export function updateMaterialProduce(materialProduce: MaterialProduce) {
  return defHttp.put<MaterialProduce>(
    { url: Api.MaterialProduce, params: materialProduce },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品生产表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteMaterialProduce(id: string) {
  return defHttp.delete<MaterialProduce>(
    { url: Api.MaterialProduce + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除产品生产表
 *
 * @param ids ID集合字符串
 * @return
 */
export function batchDeleteMaterialProduce(ids: string) {
  return defHttp.delete<MaterialProduce>(
    { url: Api.MaterialProduce + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
