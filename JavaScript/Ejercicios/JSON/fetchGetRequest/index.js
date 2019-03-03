// PASO 2
onRequestSuccess = json => console.log(json[0].name);

// PASO 1
request(
  'https://restcountries.eu/rest/v2/name/spain',
  onRequestSuccess
);
