import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 行政区域
 * @author cgli
 * @date: 2023-05-06
 * @version: V1.0.0
 */
export interface Region extends BaseEntity<string> {
  pid: string;
  pids: string;
  pidsName: string;
  name: string;
  englishName: string;
  code: string;
  level: number;
  levelName: string;
  countryId: string;
  remarks: string;
  deletedFlag: number;
}

export interface ReqRegion {

}

export type RegionPageModel = PageResult<Region>;
