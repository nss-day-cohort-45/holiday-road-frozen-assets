import { useParks } from '../parks/ParkProvider.js';
import { useAttractions } from '../attractions/AttractionProvider.js';
import { useEateries } from '../eateries/EateryProvider.js';

const searchBar = document.querySelector('#searchInput');
const searchResultsContainer = document.querySelector('.searchResults');
const eventHub = document.querySelector('.container');

searchBar.addEventListener('keyup', () => {
  const parks = useParks();
  const attractions = useAttractions();
  const eateries = useEateries();
  console.log(parks);
  let searchInput = searchBar.value.toLowerCase();
  let searchResults = [];

  let shitToSearchThru = [];

  parks.forEach((park) => {
    let parkObject = {
      type: 'park',
      name: park.fullName.toLowerCase(),
      id: park.id,
      location: 'park',
    };
    shitToSearchThru.push(parkObject);
  });

  attractions.forEach((attraction) => {
    let attractionObject = {
      type: 'attraction',
      name: attraction.name.toLowerCase(),
      id: attraction.id,
      location: `${attraction.city.toLowerCase()}, ${attraction.state.toLowerCase()}`,
    };
    shitToSearchThru.push(attractionObject);
  });

  eateries.forEach((eatery) => {
    let eateryObject = {
      type: 'eatery',
      name: eatery.businessName.toLowerCase(),
      id: eatery.id,
      location: `${eatery.city.toLowerCase()}, ${eatery.state.toLowerCase()}`,
    };
    shitToSearchThru.push(eateryObject);
  });

  if (searchInput !== '') {
    searchResults = shitToSearchThru.filter(
      (item) =>
        item.name.includes(searchInput) || item.location.includes(searchInput)
    );
    searchResultsContainer.innerHTML = searchResults
      .map((result) => `<p>${result.name}</p>`)
      .join('');
  }
});

searchBar.addEventListener('input', () => {
  if (searchBar.value === '') {
    searchResultsContainer.innerHTML = '';
  }
});
