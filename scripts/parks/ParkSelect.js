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
  parkSelectTarget.innerHTML += `
  <select class="dropdown" id="parkDropdown">
    <option value="0">Please select a National Park...</option>
    ${parkArray
      .map((park) => `<option value="${park.id}">${park.fullName}</option>`)
      .join('')}
  </select>
  `;
};

eventHub.addEventListener('change', (evt) => {
  if (!evt.target.id === 'parkDropdown') {
    return;
  }

  const customEvent = new CustomEvent('parkChosen', {
    detail: {
      parkThatWasChosen: evt.target.value,
    },
  });
  eventHub.dispatchEvent(customEvent);
});
