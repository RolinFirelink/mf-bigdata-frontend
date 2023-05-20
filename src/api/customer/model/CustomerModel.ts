import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 客户表
 * @author cgli
 * @date: 2023-05-17
 * @version: V1.0.0
 */
export interface Customer extends BaseEntity<number> {
  isDeleted: number;
  name: string;
  platformId: number;
  platformUserId: number;
  version: number;
}

export interface ReqCustomer {

}

export type CustomerPageModel = PageResult<Customer>;
