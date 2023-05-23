import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-21
 * @version: V1.0.0
 */
export interface Material extends BaseEntity<number> {
  categoryId: number;
  name: string;
  model: string;
  standard: string;
  color: string;
  unit: string;
  remark: string;
  expiryNum: number;
  weight: number;
  enabled: number;
  extendField: string;
  enableSerialNumber: number;
  enableBatchNumber: number;
 // deletedFlag: number;
  //orgId: number;
  scale: number;
  flag: number;
}

export interface ReqMaterial {

}

export type MaterialPageModel = PageResult<Material>;
