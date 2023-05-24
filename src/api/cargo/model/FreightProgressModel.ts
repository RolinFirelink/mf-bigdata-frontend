import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 货运进度表
 * @author cgli
 * @date: 2023-05-24
 * @version: V1.0.0
 */
export interface FreightProgress extends BaseEntity<string> {
  transportState: string;
  transportLocation: string;
  freightNumber: number;
  deleteFlag: number;
}

export interface ReqFreightProgress {

}

export type FreightProgressPageModel = PageResult<FreightProgress>;
