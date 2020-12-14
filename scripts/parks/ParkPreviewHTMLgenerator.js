import { getWeather, useWeather } from '../weather/WeatherProvider.js';
const eventHub = document.querySelector('.container');

export const ParkPreviewHTMLgenerator = (park) => {
  let weather = [];
  let parkPreviewHTML;

  weather = useWeather();

  const weatherFunction = () => {
    let weatherOutputArray = weather.map((date) => {
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

      return `<div>
      <p>${humanDate}</p>
      <ul>
      <li>Hi: ${high}</li>
      <li>Lo: ${low}</li>
      <li>${desc}</li>
      </ul>
      </div>`;
    });
    return weatherOutputArray.join('');
  };

  parkPreviewHTML = `
    <div class="preview-card preview-card--park">
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
    `;
  return parkPreviewHTML;
};
