const fetchData = async () => {
  const resp = await fetch("https://api.covid19india.org/data.json");
  const data = await resp.json();
  return data;
};

export default fetchData;
