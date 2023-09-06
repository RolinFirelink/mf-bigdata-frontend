import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 报表页面
 * @author cgli
 * @date: 2023-05-31
 * @version: V1.0.0
 */
export interface CloudMap extends BaseEntity<number> {
  flag: number;
  title: string;
  summary: string;
  path: string;
  imgUrl: string;
  sort: number;
}

export interface ReqCloudMap {}

export type CloudMapPageModel = PageResult<CloudMap>;
