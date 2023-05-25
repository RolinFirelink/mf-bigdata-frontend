import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 客户消费行为表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface CustomerBehavior extends BaseEntity<number> {
  type: number;
  extendInfo: string;
  remark: string;
  flag: number;
  deleteFlag: number;
  version: number;
}

export interface ReqCustomerBehavior {}

export type CustomerBehaviorPageModel = PageResult<CustomerBehavior>;
