import { getParks, useParks } from './ParkProvider.js';

const eventHub = document.querySelector('.container');
const parkSelectTarget = document.querySelector('.dropdowns__parks');

export const parkSelect = () => {
  getParks().then(() => {
    let parks = useParks();
    render(parks);
  });
};

const render = (parkArray) => {
  parkSelectTarget.innerHTML = `
  <select class="dropdown" id="parkDropdown">
    <option value="0">Select a National Park...</option>
    ${parkArray
      .map((park) => `<option value="${park.id}">${park.fullName}</option>`)
      .join('')}
  </select>
  `;
};

//TODO: write change event handler