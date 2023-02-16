export const apiHandlerMovie = (method, url) => fetch(url)
  .then((response) => response.json())
  .then((json) => json);

export const apiHandlerInv = async(method, url, payload) => {
  if (payload) {
    const response = await fetch(`${url}/likes`,
     {
      method,
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    )
    return response
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