/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-10 20:24:00
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 16:51:58
 * @FilePath: \mf-bigdata-frontend\src\api\price\OriginPrice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 产地价格
 * @author cgli
 * @date: 2023-07-10
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  OriginPrice,
  ReqOriginPrice,
  OriginPricePageModel,
} from "/@/api/price/model/OriginPriceModel";

enum Api {
  OriginPrice = "/web/originPrice",
}

/**
 * 分页列表查询
 *
 * @param reqOriginPrice
 * @return
 */
export const getOriginPriceList = (reqOriginPrice?: ReqOriginPrice) => {
  return defHttp.get<OriginPricePageModel>({ url: Api.OriginPrice, params: reqOriginPrice });
};

/**
 * 新增产地价格
 *
 * @param originPrice
 * @return
 */
export function insertOriginPrice(originPrice: OriginPrice) {
  return defHttp.post<OriginPrice>(
    { url: Api.OriginPrice, params: originPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 修改产地价格
 *
 * @param originPrice
 * @return
 */
export function updateOriginPrice(originPrice: OriginPrice) {
  return defHttp.put<OriginPrice>(
    { url: Api.OriginPrice, params: originPrice },
    { successMessageMode: "message" },
  );
}

/**
 * 删除产地价格
 *
 * @param id 唯一ID
 * @return
 */
export function deleteOriginPrice(id: string) {
  return defHttp.delete<OriginPrice>(
    { url: Api.OriginPrice + "/" + id },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteOriginPrice(ids: string) {
  return defHttp.delete<OriginPrice>(
    { url: Api.OriginPrice + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
