import thingsApi from "./axiosSettings";

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
