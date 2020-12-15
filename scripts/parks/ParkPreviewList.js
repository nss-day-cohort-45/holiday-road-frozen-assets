import { useParks } from './ParkProvider.js';
import { getWeather } from '../weather/WeatherProvider.js';
import { ParkPreviewHTMLgenerator } from './ParkPreviewHTMLgenerator.js';

const parkPreviewTarget = document.querySelector('.preview--park');
const eventHub = document.querySelector('.container');

eventHub.addEventListener('parkChosen', (event) => {
  let parks = useParks();

  if (event.detail.parkThatWasChosen !== '0') {
    const chosenPark = parks.find(
      (park) => park.id === event.detail.parkThatWasChosen
    );

    getWeather(chosenPark.latitude, chosenPark.longitude).then(() => {
      parkPreviewTarget.innerHTML = ParkPreviewHTMLgenerator(chosenPark);
    });
  } else parkPreviewTarget.innerHTML = '';
});
