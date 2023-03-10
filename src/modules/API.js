export const BASE_URL = 'https://api.tvmaze.com/search/shows?q=girls';
export const INV_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HhwngfSk0BVbaLtkUNy0';

export const getAllComments = async (id) => {
  const response = await fetch(`${INV_URL}/comments?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};
export const postComment = async (id, name, comment) => {
  const response = await fetch(`${INV_URL}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment,
    }),
  });
  const data = await response.text();
  return data;
};

export const getAllLikes = async () => {
  const response = await fetch(`${INV_URL}/likes`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
};
