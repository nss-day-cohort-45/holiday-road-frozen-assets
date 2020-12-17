import { ParkDetailsHTMLgenerator } from './ParkDetailHTMLgenerator.js';
import { useParks } from './ParkProvider.js';

const eventHub = document.querySelector('.container');
const targetDialog = document.querySelector('.dialog-container');

eventHub.addEventListener('parkDetailClicked', (evt) => {
  const parks = useParks();
  const parkToDetail = evt.detail.parkId;
  const parkObject = parks.find((park)=>park.id === parkToDetail);
  
  const parkHTML = ParkDetailsHTMLgenerator(parkObject);
  targetDialog.innerHTML = parkHTML;
  targetDialog.classList.add('park-dialog');
  targetDialog.showModal();
});

eventHub.addEventListener('click', (evt)=> {
  if (evt.target.id === 'closeModal') {
    targetDialog.close();
    targetDialog.classList.remove('park-dialog');
  }
})

window.onclick = function(event) {
  if (event.target === contentTarget)
    contentTarget.close();
}