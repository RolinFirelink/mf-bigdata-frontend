/**
 * @description: 惠农网产量数据
 * @author cgli
 * @date: 2023-09-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ProduceData,
  ReqProduceData,
  ProduceDataPageModel,
} from "/@/api/docking/model/ProduceDataModel";

enum Api {
  ProduceData = "/web/produceData",
}

/**
 * 分页列表查询
 *
 * @param reqProduceData
 * @return
 */
export const getProduceDataList = (reqProduceData?: ReqProduceData) => {
  return defHttp.get<ProduceDataPageModel>({ url: Api.ProduceData, params: reqProduceData });
};

/**
 * 新增惠农网产量数据
 *
 * @param produceData
 * @return
 */
export function insertProduceData(produceData: ProduceData) {
  return defHttp.post<ProduceData>(
    { url: Api.ProduceData, params: produceData },
    { successMessageMode: "message" },
  );
}

/**
 * 修改惠农网产量数据
 *
 * @param produceData
 * @return
 */
export function updateProduceData(produceData: ProduceData) {
  return defHttp.put<ProduceData>(
    { url: Api.ProduceData, params: produceData },
    { successMessageMode: "message" },
  );
}

/**
 * 删除惠农网产量数据
 *
 * @param id 唯一ID
 * @return
 */
export function deleteProduceData(id: string) {
  return defHttp.delete<ProduceData>(
    { url: Api.ProduceData + "/" + id },
    { successMessageMode: "message" },
  );
}
