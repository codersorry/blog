import myRequest from "../utils/request";

// 获取文章列表
export async function getArticleList() {
  return myRequest.get({
    url: "/default/getArticleList",
  });
}
