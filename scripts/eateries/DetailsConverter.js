const yesOrNo = (amenity) => {
  if (amenity === true) {
    return document.innerHTML = '<image src="./images/boolean-yes.png" alt="Yes">'
  }
  else {
    return document.innerHTML = '<image src="./images/boolean-no.png" alt="No">'
  }
}

export const EateryDetailsConverter = (eatery) => {
  return `
    <div class="close"><button class="close" id="closeModal">Close</button></div>
    <h2 class="eateryName">${eatery.businessName}</h2>
    <p class="eateryLocation>Located in ${eatery.city}, ${eatery.state}.</p>
    <p class="eateryDescription">${eatery.description}</p>
    <h4 class="eateryAmenities">Amenities:</h4>
    <p class="eatery__Wheelchair">Wheelchair Accesible: ${yesOrNo(eatery.ameneties.wheelchairAccessible)}</p>
    <p class="eatery__pets">Pet Friendly: ${yesOrNo(eatery.ameneties.petFriendly)}<p>
    <p class="eatery__wifi">Wifi: ${yesOrNo(eatery.ameneties.wifi)}</p>
    <p class="eatery__changingRoom">Diaper Facility: ${yesOrNo(eatery.ameneties.diaperFacility)}</p>
    <p class="eatery__playground">Playground: ${yesOrNo(eatery.ameneties.playground)}</p>
    <p class="eatery__restrooms">Restrooms: ${yesOrNo(eatery.ameneties.restrooms)}</p>
    `
}