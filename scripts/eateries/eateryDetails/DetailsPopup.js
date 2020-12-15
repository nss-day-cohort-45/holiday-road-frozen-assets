export const eateryDetailsPopupConverter = (eatery) => {
    return `<dialog open class="eatery__details">
    ${eatery.businessName}
    ${eatery.description}
    Located in ${eatery.city}, ${eatery.state}.
    Amenities:
    Wheelchair Accesible? ${eatery.amenities.wheelchairAccessible}
    Pet Friendly? ${eatery.amenities.petFriendly}
    Wifi? ${eatery.amenities.wifi}
    Diaper Facility? ${eatery.amenities.diaperFacility}
    Playground? ${eatery.amenities.playground}
    Restrooms? ${eatery.ameities.restrooms}
    </dialog>`
    
}

const eventHub = document.querySelector(".container")

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