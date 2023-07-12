import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 企业生产信息表
 * @author cgli
 * @date: 2023-07-11
 * @version: V1.0.0
 */
export interface ProduceInfo extends BaseEntity<number> {
  companyId: number;
  flag: number;
  price: number;
  scale: number;
  scaleUnit: string;
  priceUnit: string;
  estimatedLaunchDate: string;
  identifiers: string;
}

export interface ReqProduceInfo {}

export type ProduceInfoPageModel = PageResult<ProduceInfo>;
