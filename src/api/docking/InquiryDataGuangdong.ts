/**
 * @description: 惠农网广东月供应数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  InquiryDataGuangdong,
  ReqInquiryDataGuangdong,
  InquiryDataGuangdongPageModel,
} from "/@/api/docking/model/InquiryDataGuangdongModel";

enum Api {
  InquiryDataGuangdong = "/web/inquiryDataGuangdong",
}

/**
 * 分页列表查询
 *
 * @param reqInquiryDataGuangdong
 * @return
 */
export const getInquiryDataGuangdongList = (reqInquiryDataGuangdong?: ReqInquiryDataGuangdong) => {
  return defHttp.get<InquiryDataGuangdongPageModel>({
    url: Api.InquiryDataGuangdong,
    params: reqInquiryDataGuangdong,
  });
};

/**
 * 新增惠农网广东月供应数据
 *
 * @param inquiryDataGuangdong
 * @return
 */
export function insertInquiryDataGuangdong(inquiryDataGuangdong: InquiryDataGuangdong) {
  return defHttp.post<InquiryDataGuangdong>(
    { url: Api.InquiryDataGuangdong, params: inquiryDataGuangdong },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网广东月供应数据
 *
 * @param inquiryDataGuangdong
 * @return
 */
export function updateInquiryDataGuangdong(inquiryDataGuangdong: InquiryDataGuangdong) {
  return defHttp.put<InquiryDataGuangdong>(
    { url: Api.InquiryDataGuangdong, params: inquiryDataGuangdong },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网广东月供应数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteInquiryDataGuangdong(id: string) {
  return defHttp.delete<InquiryDataGuangdong>(
    { url: Api.InquiryDataGuangdong + "/" + id },
    { successMessageMode: "message" },
  );
}
