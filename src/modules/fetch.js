import BASE_URL from "./utils";

const apiHandler = async (method, url) => {
  return await fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json
    });
};

export default apiHandler;