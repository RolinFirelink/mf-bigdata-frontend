/**
 * @description: sh_data_import
 * @author cgli
 * @date: 2023-06-05
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { DataImport, ReqDataImport, DataImportPageModel } from "/@/api/web/model/DataImportModel";

enum Api {
  DataImport = "/web/dataImport",
}

/**
 * 分页列表查询
 *
 * @param reqDataImport
 * @return
 */
export const getDataImportList = (reqDataImport?: ReqDataImport) => {
  return defHttp.get<DataImportPageModel>({ url: Api.DataImport, params: reqDataImport });
};

/**
 * 新增sh_data_import
 *
 * @param dataImport
 * @return
 */
export function insertDataImport(dataImport: DataImport) {
  return defHttp.post<DataImport>(
    { url: Api.DataImport, params: dataImport },
    { successMessageMode: "message" },
  );
}

/**
 * 修改sh_data_import
 *
 * @param dataImport
 * @return
 */
export function updateDataImport(dataImport: DataImport) {
  return defHttp.put<DataImport>(
    { url: Api.DataImport, params: dataImport },
    { successMessageMode: "message" },
  );
}

/**
 * 删除sh_data_import
 *
 * @param id 唯一ID
 * @return
 */
export function deleteDataImport(id: string) {
  return defHttp.delete<DataImport>(
    { url: Api.DataImport + "/" + id },
    { successMessageMode: "message" },
  );
}
