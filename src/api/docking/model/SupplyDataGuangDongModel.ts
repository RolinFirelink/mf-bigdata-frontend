import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网广东月供应数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export interface SupplyDataGuangDong extends BaseEntity<number> {
  date: string;
  flag: number;
  provinceName: string;
  cntRatio: number;
  deleteFlag: number;
}

export interface ReqSupplyDataGuangDong {

}

export type SupplyDataGuangDongPageModel = PageResult<SupplyDataGuangDong>;
