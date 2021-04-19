async function getJsonData(fileName) {
  return fetch(fileName).then((res) => {
    if (!res.ok) {
      let message = `${res.status} ${res.statusText}: ${res.url}`;
      throw new Error(message);
    }
    return res.json();
  });
}

export default getJsonData;
