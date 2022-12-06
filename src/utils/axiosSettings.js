import axios from "axios";

const thingsApi = axios.create({
  baseURL: "https://filthy-neckerchief-tuna.cyclic.app/api",
});

export const getArticleList = () => {
  const urlString = "/articles";

  return thingsApi
    .get(urlString)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

const getArticle = (article_id) => {
  const urlString = `/articles/${article_id}`;

  return thingsApi.get(urlString).then(({ data }) => {
    return data;
  });
};

export default getArticle;
