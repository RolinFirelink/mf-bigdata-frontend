import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 惠农网省份月采购数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
export interface InquiryData extends BaseEntity<number> {
  date: string;
  flag: number;
  provinceName: string;
  cntRatio: number;
  deleteFlag: number;
}

export interface ReqInquiryData {

}

export type InquiryDataPageModel = PageResult<InquiryData>;
