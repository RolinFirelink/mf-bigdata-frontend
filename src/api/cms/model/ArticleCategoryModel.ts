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

export interface ReqArticleCategory {
  name: string;
}

export type ArticleCategoryPageModel = PageResult<ArticleCategory>;
