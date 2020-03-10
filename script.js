function GETWeather(city, apiKey, Yay, Nay) {
  const ProxyURL = "https://cors-anywhere.herokuapp.com";
  //Fetch returns the promise
  fetch(
    `${ProxyURL}/api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
      console.log(json.main.temp);
      console.log(json.weather[0].description);

      Yay(json);
    })
    .catch(error => {
      Nay(error);
    });
}
