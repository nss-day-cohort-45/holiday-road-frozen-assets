export const AttractionDetailsHTMLgenerator = (attraction) => {
  return `
  <div class="attraction-details">
    <h2 class="attraction-details__name">${attraction.name}</h2>
    <p class="attraction-details__location bold">${attraction.city}, ${attraction.state}</p>
    <p class="attraction-details__description">${attraction.description}</p>
    <h4 class="attraction-details__ameneties">Amenities:</h4>
    <p class="attraction-details__amenitiesSouvenirs">Souvenir Shop: ${attraction.ameneties.souvenirs}</p>
    <p class="attraction-details__amenitiesRestrooms">Restrooms: ${attraction.ameneties.restrooms}</p>
    <div class="attraction-details__closeButtonContainer">
    <button id="closeModal">Close</button>
    </div>
  </div>
  `
}

