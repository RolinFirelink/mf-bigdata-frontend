/**
 * @description: 订单数据主表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { ShOrder, ReqShOrder, ShOrderPageModel } from "/@/api/order/model/OrderModel";

enum Api {
  ShOrder = "/web/order",
}

/**
 * 分页列表查询
 *
 * @param reqShOrder
 * @return
 */
export const getShOrderList = (reqShOrder?: ReqShOrder) => {
  return defHttp.get<ShOrderPageModel>({ url: Api.ShOrder, params: reqShOrder });
};

/**
 * 新增订单数据主表
 *
 * @param shOrder
 * @return
 */
export function insertShOrder(shOrder: ShOrder) {
  return defHttp.post<ShOrder>(
    { url: Api.ShOrder, params: shOrder },
    { successMessageMode: "message" },
  );
}

/**
 * 修改订单数据主表
 *
 * @param shOrder
 * @return
 */
export function updateShOrder(shOrder: ShOrder) {
  return defHttp.put<ShOrder>(
    { url: Api.ShOrder, params: shOrder },
    { successMessageMode: "message" },
  );
}

/**
 * 删除订单数据主表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteShOrder(id: string) {
  return defHttp.delete<ShOrder>(
    { url: Api.ShOrder + "/" + id },
    { successMessageMode: "message" },
  );
}
