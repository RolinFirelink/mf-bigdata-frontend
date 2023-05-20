import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品库存表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export interface MaterialStorage extends BaseEntity<number> {
  flag: number;
  data: string;
  deletedFlag: number;
  ownerId: number;
  materialId: number;
  materialName: string;
  number: number;
}

export type MaterialStoragePageModel = PageResult<MaterialStorage>;
