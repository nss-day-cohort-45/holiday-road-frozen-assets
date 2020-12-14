import { useEateries } from "../EateryProvider.js"
import { eateryDetailsPopupConverter } from "./DetailsPopup.js"

const eventHub = document.querySelector(".dialog-container")

eventHub.addEventListener('showEateryClicked', event => {
    if(event.detail.eateryThatWasChosen !== "0") {
        const eateries = useEateries()
        const chosenEatery = eateries.find((eatery) => eatery.id === parseInt(event.detail.eateryThatWasChosen))

        const details = chosenEatery
        details.map(details => eateryDetailsPopupConverter(details)).join("")
    }
})