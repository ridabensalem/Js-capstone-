const baseUrl='https://www.eventbriteapi.com/v3/users/me/?token=PWQEI5BDOZEEQ2A5NVQT';
const getData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);
  return data;
  
};

export default getData;