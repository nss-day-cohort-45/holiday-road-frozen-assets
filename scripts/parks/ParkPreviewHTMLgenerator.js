import { getWeather, useWeather } from '../weather/WeatherProvider.js';
const eventHub = document.querySelector('.container');

export const ParkPreviewHTMLgenerator = (park) => {
  let weather = [];
  let parkPreviewHTML;

  weather = useWeather();

  const weatherFunction = () => {
    let weatherOutputArray = weather.slice(0, 5).map((date) => {
      let day = date.dt;
      let milliseconds = day * 1000;
      let dateObject = new Date(milliseconds);
      let dateOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      };
      let humanDate = dateObject.toLocaleDateString('en-us', dateOptions);
      let low = date.temp.min;
      let high = date.temp.max;
      let desc = date.weather[0].description;
      let img = date.weather[0].icon;

      return `<div class="weather-card">
      <p>${humanDate}</p>
      <p>Hi: ${high}&deg; F</p>
      <p>Lo: ${low}&deg; F</p>
      <p>${desc}</p>
      <img src="http://openweathermap.org/img/wn/${img}@2x.png">
      </div>`;
    });
    return weatherOutputArray.join('');
  };

  parkPreviewHTML = `
    <div class="preview-card preview-card--park">
    <div class="preview-card--park__info">
      <input type="hidden" id="selectedPark" value="${park.id}">
      <h4>
        ${park.fullName}
      </h4>
      <p class="bold">${park.addresses[0].city}, ${park.addresses[0].stateCode}
    </p>
    <div class="park-weather">
    ${weatherFunction()}
    </div>
    </div>
    <div class="detailButton">
        <button class="parkDetails" id="parkDetailButton--${
          park.id
        }">Details</button>
      </div>
    </div>
    `;
  return parkPreviewHTML;
};
