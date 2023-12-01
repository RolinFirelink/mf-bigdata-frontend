/**
 * @description: 地区生产宏观数据
 * @author cgli
 * @date: 2023-10-19
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductionData,
  ReqProductionData,
  ProductionDataPageModel,
} from "/@/api/statistics/model/ProductionDataModel";

enum Api {
  ProductionData = "/web/productionData",
}

/**
 * 获取生产规模
 *
 * @param reqProductionData
 * @return
 */
export const getScaleOfProduction = (reqProductionData?: ReqProductionData) => {
  return defHttp.get<ProductionData[]>({
    url: Api.ProductionData + "/public/scaleOfProduction",
    params: reqProductionData,
  });
};

/**
 * 获取城市信息
 *
 * @param reqProductionData
 * @return
 */
export const getCityDatas = (reqProductionData?: ReqProductionData) => {
  return defHttp.get<ProductionData[]>({
    url: Api.ProductionData + "/public",
    params: reqProductionData,
  });
};

/**
 * 分页列表查询
 *
 * @param reqProductionData
 * @return
 */
export const getProductionDataList = (reqProductionData?: ReqProductionData) => {
  return defHttp.get<ProductionDataPageModel>({
    url: Api.ProductionData,
    params: reqProductionData,
  });
};

/**
 * 新增地区生产宏观数据
 *
 * @param productionData
 * @return
 */
export function insertProductionData(productionData: ProductionData) {
  return defHttp.post<ProductionData>(
    { url: Api.ProductionData, params: productionData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改地区生产宏观数据
 *
 * @param productionData
 * @return
 */
export function updateProductionData(productionData: ProductionData) {
  return defHttp.put<ProductionData>(
    { url: Api.ProductionData, params: productionData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除地区生产宏观数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductionData(id: string) {
  return defHttp.delete<ProductionData>(
    { url: Api.ProductionData + "/" + id },
    { successMessageMode: "message" },
  );
}
