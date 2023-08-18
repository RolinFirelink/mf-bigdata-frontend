/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 18:03:20
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-18 16:36:00
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\SalesFlow.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 销售流向
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { SalesFlow, ReqSalesFlow, SalesFlowPageModel } from "/@/api/analyse/model/SalesFlowModel";
enum Api {
  SalesFlow = "/web/salesFlow",
}

/**
 * 分页列表查询
 *
 * @param reqSalesFlow
 * @return
 */
export const getSalesFlowList = (reqSalesFlow?: ReqSalesFlow) => {
  return defHttp.get<SalesFlowPageModel>({ url: Api.SalesFlow, params: reqSalesFlow });
};

/**
 * 新增销售流向
 *
 * @param salesFlow
 * @return
 */
export function insertSalesFlow(salesFlow: SalesFlow) {
  return defHttp.post<SalesFlow>(
    { url: Api.SalesFlow, params: salesFlow },
    { successMessageMode: "message" },
  );
}

/**
 * 修改销售流向
 *
 * @param salesFlow
 * @return
 */
export function updateSalesFlow(salesFlow: SalesFlow) {
  return defHttp.put<SalesFlow>(
    { url: Api.SalesFlow, params: salesFlow },
    { successMessageMode: "message" },
  );
}

/**
 * 删除销售流向
 *
 * @param id 唯一ID
 * @return
 */
export function deleteSalesFlow(id: string) {
  return defHttp.delete<SalesFlow>(
    { url: Api.SalesFlow + "/" + id },
    { successMessageMode: "message" },
  );
}
/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteSalesFlow(ids: string) {
  return defHttp.delete<SalesFlow>(
    { url: Api.SalesFlow + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}