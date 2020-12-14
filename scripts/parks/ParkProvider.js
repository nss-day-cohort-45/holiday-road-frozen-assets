let parks = [];

export const useParks = () => {
  return parks.slice();
};

export const getParks = () => {
  return fetch(
    'https://developer.nps.gov/api/v1/parks?limit=498&api_key=VJFHuSAHCccly6U0V9Dljl7g24EwVmxO77Wd4cIQ'
  )
    .then((res) => res.json())
    .then((parsedParks) => {
      parks = parsedParks.data;
      console.log(parks);
    });
};
