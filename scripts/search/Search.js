import { useParks } from '../parks/ParkProvider.js';
import { useAttractions } from '../attractions/AttractionProvider.js';
import { useEateries } from '../eateries/EateryProvider.js';
import { SearchResult } from './SearchResult.js';

const searchBar = document.querySelector('#searchInput');
const searchResultsContainer = document.querySelector('.searchResults');
const eventHub = document.querySelector('.container');
const hidePreview = document.querySelector('#hidePreviews');

hidePreview.addEventListener('click', (clickEvent) => {
  document.querySelector('.preview--park').classList.toggle('isHidden');
  document.querySelector('.preview--attraction').classList.toggle('isHidden');
  document.querySelector('.preview--eatery').classList.toggle('isHidden');
  if (clickEvent.target.innerHTML === 'Hide Previews') {
    clickEvent.target.innerHTML = 'Show Previews';
  } else {
    clickEvent.target.innerHTML = 'Hide Previews';
  }
});

searchBar.addEventListener('keyup', () => {
  document.querySelector('#searchResultsHeader').classList.remove('isHidden');
  const parks = useParks();
  const attractions = useAttractions();
  const eateries = useEateries();
  let searchInput = searchBar.value.toLowerCase();
  let searchResults = [];

  let shitToSearchThru = [];

  parks.forEach((park) => {
    let parkObject = {
      type: 'park',
      name: park.fullName.toLowerCase(),
      id: park.id,
      city: park.addresses[0]?.city.toLowerCase(),
      state: park.addresses[0]?.stateCode.toLowerCase(),
    };
    shitToSearchThru.push(parkObject);
  });

  attractions.forEach((attraction) => {
    let attractionObject = {
      type: 'attraction',
      name: attraction.name.toLowerCase(),
      id: attraction.id,
      city: attraction.city.toLowerCase(),
      state: attraction.state.toLowerCase(),
    };
    shitToSearchThru.push(attractionObject);
  });

  eateries.forEach((eatery) => {
    let eateryObject = {
      type: 'eatery',
      name: eatery.businessName.toLowerCase(),
      id: eatery.id,
      city: eatery.city.toLowerCase(),
      state: eatery.state.toLowerCase(),
    };
    shitToSearchThru.push(eateryObject);
  });

  if (searchInput !== '') {
    searchResults = shitToSearchThru.filter(
      (item) =>
        item.name.includes(searchInput) ||
        item.city?.includes(searchInput) ||
        item.state?.includes(searchInput)
    );
    if (searchResults.length>0){
      searchResultsContainer.innerHTML = searchResults
        .map((result) => SearchResult(result))
        .join('');
    } else {
      searchResultsContainer.innerHTML = 'No Results Found'
    }
  }
});

searchBar.addEventListener('input', () => {
  if (searchBar.value === '') {
    document.querySelector('#searchResultsHeader').classList.add('isHidden');
    searchResultsContainer.innerHTML = '';
  }
});

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id.startsWith('addToPreviewButtonPark--')) {
    const [unused, parkId] = clickEvent.target.id.split('--');

    const customEvent = new CustomEvent('parkChosen', {
      detail: {
        parkThatWasChosen: parkId,
      },
    });
    eventHub.dispatchEvent(customEvent);
  } else if (
    clickEvent.target.id.startsWith('addToPreviewButtonAttraction--')
  ) {
    const [unused, attractionId] = clickEvent.target.id.split('--');

    const customEvent = new CustomEvent('attractionChosen', {
      detail: {
        attractionThatWasChosen: attractionId,
      },
    });
    eventHub.dispatchEvent(customEvent);
  } else if (clickEvent.target.id.startsWith('addToPreviewButtonEatery--')) {
    const [unused, eateryId] = clickEvent.target.id.split('--');

    const customEvent = new CustomEvent('eateryChosen', {
      detail: {
        eateryThatWasChosen: eateryId,
      },
    });
    eventHub.dispatchEvent(customEvent);
  }
});
