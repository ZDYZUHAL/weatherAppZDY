function refresh(response) {
  let numelement = document.querySelector("#temperature");
  let temprecher = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  consol.log(response.data);
  cityElement.innerHTML = response.data.city;
  numelement.innerHTML = math.round(temperature);
}

function searchcity(city) {
  let apikey = "00173a535d83oadtfd4476bbc54c7c2b";
  let apiurl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}$units=metric";
  axios.get(apiurl).then(refresh);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchcity(searchInput.value);
}

let searchFormElement = document.querySelector("#searchform");
searchFormElement.addEventListener("submit", handleSearchSubmit);
