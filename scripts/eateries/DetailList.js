import { useEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".preview--eatery")
const contentTarget = document.querySelector(".preview__eateryDialog")

eventHub.addEventListener('showDetailsClicked', event => {
    if (event.detail.eateryThatWasChosen !== "0") {

        const eateries = useEateries()
        const chosenEatery = eateries.find((eatery) => eatery.id === parseInt(event.detail.eateryThatWasChosen))

        contentTarget.innerHTML = (render(chosenEatery))

        var dialog = document.querySelector('.eateryDialog')
    document.querySelector('.close').onclick = function() {
        dialog.close()
        render(chosenEatery)
    }
    }
    
}
)

const render = (eatery) => {
    return `<dialog open class="eateryDialog">
    ${eatery.businessName}<br>
    Located in ${eatery.city}, ${eatery.state}.<br>
    ${eatery.description}<br>
    Wheelchair Accesible? ${eatery.ameneties.wheelchairAccessible}<br>
    Pet Friendly? ${eatery.ameneties.petFriendly}<br>
    Wifi? ${eatery.ameneties.wifi}<br>
    Diaper Facility? ${eatery.ameneties.diaperFacility}<br>
    Playground? ${eatery.ameneties.playground}<br>
    Restrooms? ${eatery.ameneties.restrooms}<br>
    <button class="close">Close</button>
    </dialog>`
    
    
}
