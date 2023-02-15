export const apiHandlerMovie = (method, url) => fetch(url)
  .then((response) => response.json())
  .then((json) => json);

export const apiHandlerInv = (method, url, payload) => {
  if (payload) {
    return fetch(`${url}/likes`, {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json);
  }
  return fetch(`${url}`, {
    method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};

export default apiHandlerMovie;