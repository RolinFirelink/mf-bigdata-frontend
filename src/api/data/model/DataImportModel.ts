import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: sh_data_import
 * @author cgli
 * @date: 2023-06-05
 * @version: V1.0.0
 */
export interface DataImport extends BaseEntity<number> {
  tableName: string;
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
  column7: string;
  column8: string;
  column9: string;
  column10: string;
  column11: string;
  column12: string;
}

export interface ReqDataImport {}

export type DataImportPageModel = PageResult<DataImport>;
