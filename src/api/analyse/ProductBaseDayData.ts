/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 14:31:54
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 16:27:54
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\ProductBaseDayData.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 产品基地每日数据
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProductBaseDayData,
  ReqProductBaseDayData,
  ProductBaseDayDataPageModel,
} from "/@/api/analyse/model/ProductBaseDayDataModel";
enum Api {
  ProductBaseDayData = "/web/productBaseDayData",
}

/**
 * 分页列表查询
 *
 * @param reqProductBaseDayData
 * @return
 */
export const getProductBaseDayDataList = (reqProductBaseDayData?: ReqProductBaseDayData) => {
  return defHttp.get<ProductBaseDayDataPageModel>({
    url: Api.ProductBaseDayData,
    params: reqProductBaseDayData,
  });
};

/**
 * 新增产品基地每日数据
 *
 * @param productBaseDayData
 * @return
 */
export function insertProductBaseDayData(productBaseDayData: ProductBaseDayData) {
  return defHttp.post<ProductBaseDayData>(
    { url: Api.ProductBaseDayData, params: productBaseDayData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产品基地每日数据
 *
 * @param productBaseDayData
 * @return
 */
export function updateProductBaseDayData(productBaseDayData: ProductBaseDayData) {
  return defHttp.put<ProductBaseDayData>(
    { url: Api.ProductBaseDayData, params: productBaseDayData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产品基地每日数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProductBaseDayData(id: string) {
  return defHttp.delete<ProductBaseDayData>(
    { url: Api.ProductBaseDayData + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 上传excel数据
 *
 * @param params 文件数据
 * @return
 */
export function uploadExcel(params) {
  return defHttp.upload(
    {
      url: Api.ProductBaseDayData + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteProductBaseDayData(ids: string) {
  return defHttp.delete<ProductBaseDayData>(
    { url: Api.ProductBaseDayData + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}