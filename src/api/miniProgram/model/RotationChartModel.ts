import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 轮播图图片
 * @author cgli
 * @date: 2023-06-08
 * @version: V1.0.0
 */
export interface RotationChart extends BaseEntity<number> {
  imgUrl: string;
  path: string;
  sort: number;
  status: number;
  extendAttribute: string;
}

export interface ReqRotationChart {}

export type RotationChartPageModel = PageResult<RotationChart>;
