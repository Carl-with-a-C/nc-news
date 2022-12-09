import axios from "axios";

const thingsApi = axios.create({
  baseURL: "https://filthy-neckerchief-tuna.cyclic.app/api",
});

export const getArticleList = (selectedTopic) => {
  const urlString = "/articles";
  // selectedTopic !== "" ? `articles?topic=${selectedTopic}` : "/articles";

  return thingsApi
    .get(urlString, { params: { topic: selectedTopic } })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      return error;
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
      return error;
    });
};

export const getComments = (article_id) => {
  const urlString = `/articles/${article_id}/comments`;

  return thingsApi
    .get(urlString)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
export const postComment = (article_id, body) => {
  const urlString = `/articles/${article_id}/comments`;

  return thingsApi
    .post(urlString, { username: "grumpy19", body: body.body })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const updateVote = (article_id) => {
  const urlString = `/articles/${article_id}`;

  return thingsApi
    .patch(urlString, { inc_votes: 1 })
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      return error;
    });
};
