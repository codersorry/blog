import myRequest from "../utils/request";

// 根据类别id获取文章列表
export async function getListById(id) {
  return myRequest.get({
    url: `/default/getListById/${id}`,
  });
}
