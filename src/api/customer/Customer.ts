/**
 * @description: 客户表
 * @author cgli
 * @date: 2023-05-17
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Customer, ReqCustomer, CustomerPageModel } from "/@/api/customer/model/CustomerModel";

enum Api {
  Customer = "/web/customer",
}

/**
 * 分页列表查询
 *
 * @param reqCustomer
 * @return
 */
export const getCustomerList = (reqCustomer?: ReqCustomer) => {
  return defHttp.get<CustomerPageModel>({ url: Api.Customer, params: reqCustomer });
};

/**
 * 新增客户表
 *
 * @param customer
 * @return
 */
export function insertCustomer(customer: Customer) {
  return defHttp.post<Customer>(
    { url: Api.Customer, params: customer },
    { successMessageMode: "message" },
  );
}

/**
 * 修改客户表
 *
 * @param customer
 * @return
 */
export function updateCustomer(customer: Customer) {
  return defHttp.put<Customer>(
    { url: Api.Customer, params: customer },
    { successMessageMode: "message" },
  );
}

/**
 * 删除客户表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCustomer(id: string) {
  return defHttp.delete<Customer>(
    { url: Api.Customer + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除客户
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteCustomer(ids: string) {
  return defHttp.delete<Customer>(
    { url: Api.Customer + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
