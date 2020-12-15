export const eateryDetailsPopupConverter = (eatery) => {
    return alert(`${eatery.businessName}
    ${eatery.description}
    Located in ${eatery.city}, ${eatery.state}.
    Amenities:
    Wheelchair Accesible? ${eatery.amenities.wheelchairAccessible}
    Pet Friendly? ${eatery.amenities.petFriendly}
    Wifi? ${eatery.amenities.wifi}
    Diaper Facility? ${eatery.amenities.diaperFacility}
    Playground? ${eatery.amenities.playground}
    Restrooms? ${eatery.ameities.restrooms}`)
}

const eventHub = document.querySelector(".dialog-container")

eventHub.addEventListener("click", clickEvent => {
    const [splitId, indexOne] = clickEvent.target.id.split("--")

    if ("eateries" === splitId) {
        const customEvent = new CustomEvent("showDetailsClicked", {
            detail: {
                eateryThatWasChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})