export const eateryDetailsPopupConverter = (eatery) => {
    return `${eatery.businessName}
    ${eatery.description}
    Located in ${eatery.city}, ${eatery.state}.
    Amenities:
    Wheelchair Accesible? ${eatery.amenities.wheelchairAccessible}
    Pet Friendly? ${eatery.amenities.petFriendly}
    Wifi? ${eatery.amenities.wifi}
    Diaper Facility? ${eatery.amenities.diaperFacility}
    Playground? ${eatery.amenities.playground}
    Restrooms? ${eatery.ameities.restrooms}`
}