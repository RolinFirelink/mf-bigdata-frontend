/**
 * @description: 客户消费行为表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  CustomerBehavior,
  ReqCustomerBehavior,
  CustomerBehaviorPageModel,
} from "/@/api/customer/model/CustomerBehaviorModel";

enum Api {
  CustomerBehavior = "/web/customerBehavior",
}

/**
 * 分页列表查询
 *
 * @param reqCustomerBehavior
 * @return
 */
export const getCustomerBehaviorList = (reqCustomerBehavior?: ReqCustomerBehavior) => {
  return defHttp.get<CustomerBehaviorPageModel>({
    url: Api.CustomerBehavior,
    params: reqCustomerBehavior,
  });
};

/**
 * 新增客户消费行为表
 *
 * @param customerBehavior
 * @return
 */
export function insertCustomerBehavior(customerBehavior: CustomerBehavior) {
  return defHttp.post<CustomerBehavior>(
    { url: Api.CustomerBehavior, params: customerBehavior },
    { successMessageMode: "message" },
  );
}

/**
 * 修改客户消费行为表
 *
 * @param customerBehavior
 * @return
 */
export function updateCustomerBehavior(customerBehavior: CustomerBehavior) {
  return defHttp.put<CustomerBehavior>(
    { url: Api.CustomerBehavior, params: customerBehavior },
    { successMessageMode: "message" },
  );
}

/**
 * 删除客户消费行为表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteCustomerBehavior(id: string) {
  return defHttp.delete<CustomerBehavior>(
    { url: Api.CustomerBehavior + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量客户消费行为表
 *
 * @param ids ID集合字符串
 * @return
 */
export function batchDeleteCustomerBehavior(ids: string) {
  return defHttp.delete<CustomerBehavior>(
    { url: Api.CustomerBehavior + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
