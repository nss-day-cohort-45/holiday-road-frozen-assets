import { useParks } from '../parks/ParkProvider.js';
import { useAttractions } from '../attractions/AttractionProvider.js';
import { useEateries } from '../eateries/EateryProvider.js';

const eventHub = document.querySelector('.container');

export const SearchResult = (result) => {
  let parks = useParks();
  let attractions = useAttractions();
  let eateries = useEateries();

  if (result.type === 'park') {
    let parkObject = parks.find((p) => p.id === result.id);

    return `
    <div class="searchResultContainer">
      <section class="result">
      <input type="hidden" id="selectedSearchResultId" value="${parkObject.id}">
          <h4>${parkObject.fullName}</h4>
          <p class="bold">${parkObject.addresses[0]?.city}, ${parkObject.addresses[0]?.stateCode}</p>
      </section>
      <div class="addToPreviewButton" >
        <button id="addToPreviewButtonPark--${parkObject.id}">Add to Preview</button>
      </div>
  </div>
  `;
  } else if (result.type === 'attraction') {
    let attractionObject = attractions.find((a) => a.id === result.id);

    return `
    <div class="searchResultContainer">
      <section class="result">
      <input type="hidden" id="selectedSearchResultId" value="${attractionObject.id}">
          <h4>${attractionObject.name}</h4>
          <p class="bold">${attractionObject.city}, ${attractionObject.state}</p>
      </section>
      <div class="addToPreviewButton" >
        <button id="addToPreviewButtonAttraction--${attractionObject.id}">Add to Preview</button>
      </div>
  </div>
  `;
  } else if (result.type === 'eatery') {
    let eateryObject = eateries.find((e) => e.id === result.id);

    return `
    <div class="searchResultContainer">
        <section class="result">
        <input type="hidden" id="selectedSearchResultId" value="${eateryObject.id}">
  
            <h4>${eateryObject.businessName}</h4>
            <p class="bold">${eateryObject.city}, ${eateryObject.state}</p>
        </section>
        <div class="addToPreviewButton" >
          <button id="addToPreviewButtonEatery--${eateryObject.id}">Add to Preview</button>
        </div>
    </div>
    `;
  }
};
