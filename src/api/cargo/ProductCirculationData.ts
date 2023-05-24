/**
 * @description: 货运表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductCirculationData,
  ReqProductCirculationData,
  ProductCirculationDataPageModel,
} from "/@/api/cargo/model/ProductCirculationDataModel";

enum Api {
  ProductCirculationData = "/web/productCirculationData",
}

/**
 * 分页列表查询
 *
 * @param reqProductCirculationData
 * @return
 */
export const getProductCirculationDataList = (
  reqProductCirculationData?: ReqProductCirculationData,
) => {
  return defHttp.get<ProductCirculationDataPageModel>({
    url: Api.ProductCirculationData,
    params: reqProductCirculationData,
  });
};

/**
 * 新增货运表
 *
 * @param productCirculationData
 * @return
 */
export function insertProductCirculationData(productCirculationData: ProductCirculationData) {
  return defHttp.post<ProductCirculationData>(
    { url: Api.ProductCirculationData, params: productCirculationData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改货运表
 *
 * @param productCirculationData
 * @return
 */
export function updateProductCirculationData(productCirculationData: ProductCirculationData) {
  return defHttp.put<ProductCirculationData>(
    { url: Api.ProductCirculationData, params: productCirculationData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除货运表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductCirculationData(id: string) {
  return defHttp.delete<ProductCirculationData>(
    { url: Api.ProductCirculationData + "/" + id },
    { successMessageMode: "message" },
  );
}
