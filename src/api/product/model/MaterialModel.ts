import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 产品表
 * @author cgli
 * @date: 2023-05-18
 * @version: V1.0.0
 */
export interface Material extends BaseEntity<number> {
  title: string;
  summary: string;
  author: string;
  source: string;
  categoryId: number;
  coverImg: string;
  status: number;
  isTop: number;
  contentModel: number;
  clickNum: number;
  collectNum: number;
  commentNum: number;
  likeNum: number;
  downloadNum: number;
  shareNum: number;
  allowComment: number;
  allowSubscribe: number;
  sort: number;
  startTime: string;
  endTime: string;
  mediaType: string;
  extendAttribute: string;
  orgId: number;
  deleteFlag: number;
}

export type MaterialPageModel = PageResult<Material>;
