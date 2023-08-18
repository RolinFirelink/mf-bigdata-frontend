/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-08-18 11:28:22
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 14:54:54
 * @FilePath: \mf-bigdata-frontend\src\api\data\PlaceOfSale.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 销售地表
 * @author cgli
 * @date: 2023-08-18
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  PlaceOfSale,
  ReqPlaceOfSale,
  PlaceOfSalePageModel,
} from "/@/api/data/model/PlaceOfSaleModel";

enum Api {
  PlaceOfSale = "/web/placeOfSale",
}

/**
 * 分页列表查询
 *
 * @param reqPlaceOfSale
 * @return
 */
export const getPlaceOfSaleList = (reqPlaceOfSale?: ReqPlaceOfSale) => {
  return defHttp.get<PlaceOfSalePageModel>({ url: Api.PlaceOfSale, params: reqPlaceOfSale });
};

/**
 * 新增销售地表
 *
 * @param placeOfSale
 * @return
 */
export function insertPlaceOfSale(placeOfSale: PlaceOfSale) {
  return defHttp.post<PlaceOfSale>(
    { url: Api.PlaceOfSale, params: placeOfSale },
    { successMessageMode: "message" },
  );
}

/**
 * 修改销售地表
 *
 * @param placeOfSale
 * @return
 */
export function updatePlaceOfSale(placeOfSale: PlaceOfSale) {
  return defHttp.put<PlaceOfSale>(
    { url: Api.PlaceOfSale, params: placeOfSale },
    { successMessageMode: "message" },
  );
}

/**
 * 删除销售地表
 *
 * @param id 唯一ID
 * @return
 */
export function deletePlaceOfSale(id: string) {
  return defHttp.delete<PlaceOfSale>(
    { url: Api.PlaceOfSale + "/" + id },
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
      url: Api.PlaceOfSale + "/excelUpload",
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
export function batchDeletePlaceOfSale(ids: string) {
  return defHttp.delete<PlaceOfSale>(
    { url: Api.PlaceOfSale + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
