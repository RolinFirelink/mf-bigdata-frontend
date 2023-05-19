import { BaseEntity, PageResult, ReqPage } from "/@/api/model/BaseModel";

/**
 * @description: 数据库连接
 * @author: cgli
 * @date: 2023-03-13
 * @version: V1.0.0
 */
export interface DbConnect extends BaseEntity<string> {
  dbTitle: string;
  dbType: number;
  poolType: string;
  host: string;
  port: string;
  dbName: string;
  username: string;
  password: string;
  options: string;
  remark: string;
}

/**
 * 数据库连接请求
 */
export interface ReqDbConnect {
  dbTitle: string;
  dbType: number;
  host: string;
  dbName: string;
}

/**
 * 表信息
 */
export interface TableInfo {
  idType: string;
  tableName: string;
  tableComment: string;
  tableSchema: string;
  columns: string;
}

/**
 * 字段信息
 */
export interface FieldInfo {
  fieldName: string;
  isPrimary: boolean;
  type: string;
  dbType: string;
  columnType: string;
  nullAble: boolean;
  comment: string;
}

export interface DataTable {
  table: PageResult<Record<string, any>>;
  header: Record<string, any>;
}

export interface ReqTable extends ReqPage {
  connectId: string;
  tableName?: string;
}

export interface DBTreeNode {
  code: string;
  parentCode: string;
  label: string;
  type: number;
}

export type DbConnectPageModel = PageResult<DbConnect>;
