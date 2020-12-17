import { EateryDetailsConverter } from './DetailsConverter.js';
import { useEateries } from './EateryProvider.js';

const eventHub = document.querySelector('.container');
const contentTarget = document.querySelector('.dialog-container');

eventHub.addEventListener('eateryDetailsClicked', (event) => {
  const eateries = useEateries();
  const eateryDetails = event.detail.eateryId;
  const eateryObject = eateries.find((eatery)=>eatery.id === parseInt(eateryDetails));
  
  const eateryHTML = EateryDetailsConverter(eateryObject);
  contentTarget.innerHTML = eateryHTML;
  contentTarget.classList.add('eatery-dialog');
  contentTarget.showModal();
});

eventHub.addEventListener('click', (event)=> {
  if (event.target.id === 'closeModal') {
    contentTarget.close();
    contentTarget.classList.remove('eatery-dialog');
  }
})

window.onclick = function(event) {
  if (event.target === contentTarget)
    contentTarget.close();
}
