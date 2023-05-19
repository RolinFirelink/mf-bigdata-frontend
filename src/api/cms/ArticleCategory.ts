/**
 * @description: 内容分类
 * @author zsj
 * @date: 2023-05-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import {
  ArticleCategory,
  ReqArticleCategory,
  ArticleCategoryPageModel,
} from "./model/ArticleCategoryModel";

enum Api {
  ArticleCategory = "/web/articleCategory",
}

/**
 * 分页列表查询
 *
 * @param reqArticleCategory
 * @return
 */
export const getArticleCategoryList = (reqArticleCategory?: ReqArticleCategory) => {
  return defHttp.get<ArticleCategoryPageModel>({
    url: Api.ArticleCategory,
    params: reqArticleCategory,
  });
};

/**
 * 新增内容分类
 *
 * @param articleCategory
 * @return
 */
export function insertArticleCategory(articleCategory: ArticleCategory) {
  return defHttp.post<ArticleCategory>(
    { url: Api.ArticleCategory, params: articleCategory },
    { successMessageMode: "message" },
  );
}

/**
 * 修改内容分类
 *
 * @param articleCategory
 * @return
 */
export function updateArticleCategory(articleCategory: ArticleCategory) {
  return defHttp.put<ArticleCategory>(
    { url: Api.ArticleCategory, params: articleCategory },
    { successMessageMode: "message" },
  );
}

/**
 * 删除内容分类
 *
 * @param id 唯一ID
 * @return
 */
export function deleteArticleCategory(id: string) {
  return defHttp.delete<ArticleCategory>(
    { url: Api.ArticleCategory + "/" + id },
    { successMessageMode: "message" },
  );
}
