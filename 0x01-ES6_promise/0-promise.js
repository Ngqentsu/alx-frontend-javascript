export function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('API response received');
    }, 1000);
  });
}

export default getResponseFromAPI;
