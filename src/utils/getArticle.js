import thingsApi from "./axiosSettings";

const getArticle = (article_id) => {
  const urlString = "/articles";

  return thingsApi
    .get(urlString, {
      params: { article_id },
    })
    .then(({ data }) => {
      console.log(data);
    });
};

export default getArticle;
