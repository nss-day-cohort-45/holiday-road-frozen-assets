export const EateryDetailsConverter = (eatery) => {
    return `
    <h2 class="eateryName">${eatery.businessName}</h2>
    <p class="eateryLocation>Located in ${eatery.city}, ${eatery.state}.</p>
    <p class="eateryDescription">${eatery.description}</p>
    <h4 class="eateryAmenities">Amenities:</h4>
    <p class="eatery__Wheelchair">Wheelchair Accesible? ${eatery.ameneties.wheelchairAccessible}</p>
    <p class="eatery__pets">Pet Friendly? ${eatery.ameneties.petFriendly}<p>
    <p class="eatery__wifi">Wifi? ${eatery.ameneties.wifi}</p>
    <p class="eatery__changingRoom">Diaper Facility? ${eatery.ameneties.diaperFacility}</p>
    <p class="eatery__playground">Playground? ${eatery.ameneties.playground}</p>
    <p class="eatery__restrooms">Restrooms? ${eatery.ameneties.restrooms}</p>
    <button class="close" id="closeModal">Close</button>
    `
  }