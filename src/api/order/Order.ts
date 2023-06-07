/**
 * @description: 订单数据主表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Order, ReqOrder, OrderPageModel } from "/@/api/order/model/OrderModel";

enum Api {
  Order = "/web/order",
}

/**
 * 分页列表查询
 *
 * @param reqShOrder
 * @return
 */
export const getOrderList = (reqOrder?: ReqOrder) => {
  return defHttp.get<OrderPageModel>({ url: Api.Order, params: reqOrder });
};

/**
 * 新增订单数据主表
 *
 * @param shOrder
 * @return
 */
export function insertShOrder(order: Order) {
  return defHttp.post<Order>({ url: Api.Order, params: order }, { successMessageMode: "message" });
}

/**
 * 修改订单数据主表
 *
 * @param shOrder
 * @return
 */
export function updateShOrder(order: Order) {
  return defHttp.put<Order>({ url: Api.Order, params: order }, { successMessageMode: "message" });
}

/**
 * 删除订单数据主表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteOrder(id: string) {
  return defHttp.delete<Order>({ url: Api.Order + "/" + id }, { successMessageMode: "message" });
}

/**
 * 批量删除订单
 *
 * @param ids ID集合字符串
 * @return
 */
export function batchDeleteOrder(ids: string) {
  return defHttp.delete<Order>(
    { url: Api.Order + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
/**
 * 上传excel数据
 *
 * @param params 文件数据
 * @return
 */
export function uploadOrderExcel(params) {
  return defHttp.upload(
    {
      url: Api.Order + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
