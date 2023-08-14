/*
 * @Author: DuoLaAMeng Czf141931
 * @Date: 2023-07-20 18:23:36
 * @LastEditors: DuoLaAMeng Czf141931
 * @LastEditTime: 2023-08-06 13:50:00
 * @FilePath: \mf-bigdata-frontend\src\api\analyse\BaseProductProductionScale.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 基地产品生产规模数据表
 * @author cgli
 * @date: 2023-07-20
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  BaseProductProductionScale,
  ReqBaseProductProductionScale,
  BaseProductProductionScalePageModel,
} from "/@/api/analyse/model/BaseProductProductionScaleModel";

enum Api {
  BaseProductProductionScale = "/web/baseProductProductionScale",
}

/**
 * 分页列表查询
 *
 * @param reqBaseProductProductionScale
 * @return
 */
export const getBaseProductProductionScaleList = (
  reqBaseProductProductionScale?: ReqBaseProductProductionScale,
) => {
  return defHttp.get<BaseProductProductionScalePageModel>({
    url: Api.BaseProductProductionScale,
    params: reqBaseProductProductionScale,
  });
};

/**
 * 新增基地产品生产规模数据表
 *
 * @param baseProductProductionScale
 * @return
 */
export function insertBaseProductProductionScale(
  baseProductProductionScale: BaseProductProductionScale,
) {
  return defHttp.post<BaseProductProductionScale>(
    { url: Api.BaseProductProductionScale, params: baseProductProductionScale },
    { successMessageMode: "message" },
  );
}

/**
 * 修改基地产品生产规模数据表
 *
 * @param baseProductProductionScale
 * @return
 */
export function updateBaseProductProductionScale(
  baseProductProductionScale: BaseProductProductionScale,
) {
  return defHttp.put<BaseProductProductionScale>(
    { url: Api.BaseProductProductionScale, params: baseProductProductionScale },
    { successMessageMode: "message" },
  );
}

/**
 * 删除基地产品生产规模数据表
 *
 * @param id 唯一ID
 * @return
 */
export function deleteBaseProductProductionScale(id: string) {
  return defHttp.delete<BaseProductProductionScale>(
    { url: Api.BaseProductProductionScale + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 上传excel数据
 *
 * @param params 文件数据
 * @return
 */
export function uploadExcel(params) {
  return defHttp.upload(
    {
      url: Api.BaseProductProductionScale + "/excelUpload",
      params,
    },
    { successMessageMode: "message" },
  );
}
