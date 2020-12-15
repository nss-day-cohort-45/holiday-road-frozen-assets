import { AttractionDetailsHTMLgenerator } from './AttractionDetailHTMLgenerator.js';
import { useAttractions } from './AttractionProvider.js';

const eventHub = document.querySelector('.container');
const targetDialog = document.querySelector('.dialog-container');

eventHub.addEventListener('attractionDetailClicked', (event) => {
  const attractions = useAttractions();
  const attractionToDetail = event.detail.attractionId;
  const attractionObject = attractions.find((attraction)=>attraction.id === parseInt(attractionToDetail));
  
  const attractionHTML = AttractionDetailsHTMLgenerator(attractionObject);
  targetDialog.innerHTML = attractionHTML;
  targetDialog.classList.add('attraction-dialog');
  targetDialog.showModal();
});

eventHub.addEventListener('click', (event)=> {
  if (event.target.id === 'closeModal') {
    targetDialog.close();
    targetDialog.classList.remove('attraction-dialog');
  }
})