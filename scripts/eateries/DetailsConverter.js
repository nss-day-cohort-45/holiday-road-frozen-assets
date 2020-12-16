export const EateryDetailsConverter = (eatery) => {
    return `
    <dialog open class="eateryDialog">
    ${eatery.businessName}<br>
    Located in ${eatery.city}, ${eatery.state}.<br>
    ${eatery.description}<br>
    Amenities:
    <ul>
    <ul>Wheelchair Accesible? ${eatery.ameneties.wheelchairAccessible}</ul>
    <ul>Pet Friendly? ${eatery.ameneties.petFriendly}</ul>
    <ul>Wifi? ${eatery.ameneties.wifi}</ul>
    <ul>Diaper Facility? ${eatery.ameneties.diaperFacility}</ul>
    <ul>Playground? ${eatery.ameneties.playground}</ul>
    <ul>Restrooms? ${eatery.ameneties.restrooms}</ul>
    <ul>
    <button class="close" id="closeModal">Close</button>
    </dialog>
    `
  }