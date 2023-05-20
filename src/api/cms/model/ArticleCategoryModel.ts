import { BaseEntity, PageResult } from "/@/api/model/BaseModel";

/**
 * @description: 内容分类
 * @author zsj
 * @date: 2023-05-15
 * @version: V1.0.0
 */
export interface ArticleCategory extends BaseEntity<number> {
  name: string;
  sort: number;
  num: number;
  parentId: number;
  parentIds: string;
  parentNames: string;
  orgId: number;
  deleteFlag: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReqArticleCategory {}

export type ArticleCategoryPageModel = PageResult<ArticleCategory>;
