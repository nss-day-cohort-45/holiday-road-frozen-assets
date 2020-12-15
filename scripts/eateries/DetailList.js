import { useEateries } from "./EateryProvider.js";

const eventHub = document.querySelector(".preview--eatery")
const contentTarget = document.querySelector(".preview__eateryDialog")

eventHub.addEventListener('showDetailsClicked', event => {
    if (event.detail.eateryThatWasChosen !== "0") {

        const eateries = useEateries()
        const chosenEatery = eateries.find((eatery) => eatery.id === parseInt(event.detail.eateryThatWasChosen))

        contentTarget.innerHTML = (render(chosenEatery))

        let dialog = document.querySelector('.eateryDialog')
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
    Ameneties:
    <ul>
    <ul>Wheelchair Accesible? ${eatery.ameneties.wheelchairAccessible}</ul>
    <ul>Pet Friendly? ${eatery.ameneties.petFriendly}</ul>
    <ul>Wifi? ${eatery.ameneties.wifi}</ul>
    <ul>Diaper Facility? ${eatery.ameneties.diaperFacility}</ul>
    <ul>Playground? ${eatery.ameneties.playground}</ul>
    <ul>Restrooms? ${eatery.ameneties.restrooms}</ul>
    <ul>
    <button class="close">Close</button>
    </dialog>`
    
    
}
