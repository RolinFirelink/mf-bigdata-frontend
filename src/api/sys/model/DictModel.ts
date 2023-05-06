import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 字典
 * @author: cgli
 * @Date: 2023-01-03
 * @Version: V1.0.0
 */
export interface Dict extends BaseEntity<string> {
  dictName: string
  dictCode: string
  status: number
  remark: string
}

export interface ReqDict {

}

export type DictPageModel = PageResult<Dict>;
