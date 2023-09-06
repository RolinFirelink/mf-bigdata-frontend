import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 文章
 * @author cgli
 * @date: 2023-05-15
 * @version: V1.0.0
 */
export interface Article extends BaseEntity<number> {
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
  content: string;
}

export interface ReqArticle {
  key: string;
  categoryId: number;
  title: string;
  author: string;
  source: string;
  startTime: string;
  endTime: string;
  inclined: number;
}

export type ArticlePageModel = PageResult<Article>;
