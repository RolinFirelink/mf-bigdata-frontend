/**
 * @description: 轮播图图片
 * @author cgli
 * @date: 2023-06-08
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  RotationChart,
  ReqRotationChart,
  RotationChartPageModel,
} from "/@/api/miniProgram/model/RotationChartModel";

enum Api {
  RotationChart = "/web/rotationChart",
}

/**
 * 分页列表查询
 *
 * @param reqRotationChart
 * @return
 */
export const getRotationChartList = (reqRotationChart?: ReqRotationChart) => {
  return defHttp.get<RotationChartPageModel>({ url: Api.RotationChart, params: reqRotationChart });
};

/**
 * 新增轮播图图片
 *
 * @param rotationChart
 * @return
 */
export function insertRotationChart(rotationChart: RotationChart) {
  return defHttp.post<RotationChart>(
    { url: Api.RotationChart, params: rotationChart },
    { successMessageMode: "message" },
  );
}

/**
 * 修改轮播图图片
 *
 * @param rotationChart
 * @return
 */
export function updateRotationChart(rotationChart: RotationChart) {
  return defHttp.put<RotationChart>(
    { url: Api.RotationChart, params: rotationChart },
    { successMessageMode: "message" },
  );
}

/**
 * 删除轮播图图片
 *
 * @param id 唯一ID
 * @return
 */
export function deleteRotationChart(id: string) {
  return defHttp.delete<RotationChart>(
    { url: Api.RotationChart + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除
 *
 * @param ids id集合字符串
 * @return
 */
export function batchDeleteRotationChart(ids: string) {
  return defHttp.delete<RotationChart>(
    { url: Api.RotationChart + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}
