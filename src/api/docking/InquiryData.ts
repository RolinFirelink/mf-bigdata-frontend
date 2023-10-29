/**
 * @description: 惠农网省份月采购数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  InquiryData,
  ReqInquiryData,
  InquiryDataPageModel,
} from "/@/api/docking/model/InquiryDataModel";

enum Api {
  InquiryData = "/web/inquiryData",
}

/**
 * 分页列表查询
 *
 * @param reqInquiryData
 * @return
 */
export const getInquiryDataList = (reqInquiryData?: ReqInquiryData) => {
  return defHttp.get<InquiryDataPageModel>({ url: Api.InquiryData, params: reqInquiryData });
};

/**
 * 新增惠农网省份月采购数据
 *
 * @param inquiryData
 * @return
 */
export function insertInquiryData(inquiryData: InquiryData) {
  return defHttp.post<InquiryData>(
    { url: Api.InquiryData, params: inquiryData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网省份月采购数据
 *
 * @param inquiryData
 * @return
 */
export function updateInquiryData(inquiryData: InquiryData) {
  return defHttp.put<InquiryData>(
    { url: Api.InquiryData, params: inquiryData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网省份月采购数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteInquiryData(id: string) {
  return defHttp.delete<InquiryData>(
    { url: Api.InquiryData + "/" + id },
    { successMessageMode: "message" },
  );
}
