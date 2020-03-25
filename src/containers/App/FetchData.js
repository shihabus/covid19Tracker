const fetchData = async url => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default fetchData;
// "https://api.covid19india.org/data.json";
