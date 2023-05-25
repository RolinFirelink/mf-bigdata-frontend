/**
 * @description: 文章
 * @author cgli
 * @date: 2023-05-15
 * @version: V1.0.0
 */
import { defHttp } from "/@/utils/http/axios";
import { Article, ReqArticle, ArticlePageModel } from "/@/api/cms/model/ArticleModel";

enum Api {
  Article = "/web/cms/article",
  ArticleContent = "/web/cms/article/content",
}

/**
 * 分页列表查询
 *
 * @param reqArticle
 * @return
 */
export const getArticleList = (reqArticle?: ReqArticle) => {
  return defHttp.get<ArticlePageModel>({ url: Api.Article, params: reqArticle });
};

/**
 * 新增文章
 *
 * @param article
 * @return
 */
export function insertArticle(article: Article) {
  return defHttp.post<Article>(
    { url: Api.Article, params: article },
    { successMessageMode: "message" },
  );
}

/**
 * 修改文章
 *
 * @param article
 * @return
 */
export function updateArticle(article: Article) {
  return defHttp.put<Article>(
    { url: Api.Article, params: article },
    { successMessageMode: "message" },
  );
}

/**
 * 删除文章
 *
 * @param id 唯一ID
 * @return
 */
export function deleteArticle(id: string) {
  return defHttp.delete<Article>(
    { url: Api.Article + "/" + id },
    { successMessageMode: "message" },
  );
}

/**
 * 批量删除
 *
 * @param ids id数组
 * @return
 */
export function batchDeleteArticle(ids: string) {
  return defHttp.delete<Article>(
    { url: Api.Article + "/batch?ids=" + ids },
    { successMessageMode: "message" },
  );
}

/**
 * 获取文章内容
 *
 * @param id 唯一ID
 * @return content 文章内容
 */
export const getArticleContent = (id: string) => {
  return defHttp.get<string>({ url: Api.ArticleContent + "/" + id });
};
