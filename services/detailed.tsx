import myRequest from "../utils/request";

// 通过id获取文章详情内容
export async function getArticleById(id) {
  return myRequest.get({
    url: `/default/getArticleById/${id}`,
  });
}
