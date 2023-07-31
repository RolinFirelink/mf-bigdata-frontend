/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-16 12:05:28
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-07-16 12:15:00
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\BuyersIndex.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 采购商指数
 * @author cgli
 * @date: 2023-07-16
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  BuyersIndex,
  ReqBuyersIndex,
  BuyersIndexPageModel,
} from "/@/api/analyse/model/BuyersIndexModel";

enum Api {
  BuyersIndex = "/web/buyersIndex",
}

/**
 * 分页列表查询
 *
 * @param reqBuyersIndex
 * @return
 */
export const getBuyersIndexList = (reqBuyersIndex?: ReqBuyersIndex) => {
  return defHttp.get<BuyersIndexPageModel>({ url: Api.BuyersIndex, params: reqBuyersIndex });
};

/**
 * 新增采购商指数
 *
 * @param buyersIndex
 * @return
 */
export function insertBuyersIndex(buyersIndex: BuyersIndex) {
  return defHttp.post<BuyersIndex>(
    { url: Api.BuyersIndex, params: buyersIndex },
    { successMessageMode: "message" },
  );
}

/**
 * 修改采购商指数
 *
 * @param buyersIndex
 * @return
 */
export function updateBuyersIndex(buyersIndex: BuyersIndex) {
  return defHttp.put<BuyersIndex>(
    { url: Api.BuyersIndex, params: buyersIndex },
    { successMessageMode: "message" },
  );
}

/**
 * 删除采购商指数
 *
 * @param id 唯一ID
 * @return
 */
export function deleteBuyersIndex(id: string) {
  return defHttp.delete<BuyersIndex>(
    { url: Api.BuyersIndex + "/" + id },
    { successMessageMode: "message" },
  );
}
