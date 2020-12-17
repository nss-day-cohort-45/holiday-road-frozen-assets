const yesOrNo = (amenity) => {
  if (amenity === true) {
    return document.innerHTML = '<image src="./images/boolean-yes.png" alt="Yes">'
  }
  else {
    return document.innerHTML = '<image src="./images/boolean-no.png" alt="No">'
  }
}

export const AttractionDetailsHTMLgenerator = (attraction) => {
  return `
  <div class="attraction-details">
    <div class="attraction-details__closeButtonContainer">
      <button id="closeModal">Close</button>
    </div>
    <h2 class="attraction-details__name">${attraction.name}</h2>
    <p class="attraction-details__location bold">${attraction.city}, ${attraction.state}</p>
    <p class="attraction-details__description">${attraction.description}</p>
    <h4 class="attraction-details__ameneties">Amenities:</h4>
    <p class="attraction-details__amenitiesSouvenirs">Souvenir Shop: ${yesOrNo(attraction.ameneties.souvenirs)}</p>
    <p class="attraction-details__amenitiesRestrooms">Restrooms: ${yesOrNo(attraction.ameneties.restrooms)}</p>
  </div>
  `
}

