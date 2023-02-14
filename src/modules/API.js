import BASE_URL from "./utils";

const getData = async () => {
  const response = await fetch('GET',BASE_URL);
  const data = await response.json();
  return data;
};

export default getData;