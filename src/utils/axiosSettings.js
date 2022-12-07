import axios from "axios";

const thingsApi = axios.create({
  baseURL: "https://filthy-neckerchief-tuna.cyclic.app/api",
});

export const getArticleList = () => {
  const urlString = "/articles";

  return thingsApi
    .get(urlString)
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getArticle = (article_id) => {
  const urlString = `/articles/${article_id}`;

  return thingsApi
    .get(urlString)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getComments = (article_id) => {
  const urlString = `/articles/${article_id}/comments`;

  return thingsApi
    .get(urlString)
    .then(({ data }) => {
      console.log(data, "<<<data");
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
