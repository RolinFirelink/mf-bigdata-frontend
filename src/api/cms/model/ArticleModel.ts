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
<<<<<<< HEAD
  title: string;
  author: string;
  source: string;
  categoryId: number;
=======
  categoryId: number;
  title: string;
  author: string;
  source: string;
>>>>>>> 251b7fc60b5e59fa107f5e1f83f61b3399975e8d
  startTime: string;
  endTime: string;
}

export type ArticlePageModel = PageResult<Article>;
