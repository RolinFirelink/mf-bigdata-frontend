/**
 * @description: 订单数据明细表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { OrderDetail } from "/@/api/order/model/OrderDetailModel";

enum Api {
  OrderDetail = "/web/orderDetail",
}

/**
 * 新增订单数据明细表
 *
 * @param orderDetail
 * @return
 */
export function insertOrderDetail(orderDetail: OrderDetail) {
  return defHttp.post<OrderDetail>(
    { url: Api.OrderDetail, params: orderDetail },
    { successMessageMode: "message" },
  );
}

/**
 * 修改订单数据明细表
 *
 * @param orderDetail
 * @return
 */
export function updateOrderDetail(orderDetail: OrderDetail) {
  return defHttp.put<OrderDetail>(
    { url: Api.OrderDetail, params: orderDetail },
    { successMessageMode: "message" },
  );
}

/**
 * 删除订单数据明细表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteOrderDetail(id: string) {
  return defHttp.delete<OrderDetail>(
    { url: Api.OrderDetail + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 根据订单ID获取产品信息列表
 *
 * @param orderId 订单ID
 * @return
 */
export function listByOrderId(orderId: string) {
  return defHttp.get<OrderDetail>({ url: Api.OrderDetail + "/listByOrderId/" + orderId });
}
