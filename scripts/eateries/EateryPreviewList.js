import { getEateries, useEateries } from "./EateryProvider.js"
import { EateryHTMLConverter } from "./Eatery.js"

const contentTarget = document.querySelector(".preview--eatery")
const eventHub = document.querySelector(".content")

eventHub.addEventListener('eateryChosen', event => {
    if (event.detail.eateryThatWasChosen !== "0") {
        const eateries = useEateries()
        const matchingEatery = eateries.find((eatery) => eatery.id === parseInt(event.detail.eateryThatWasChosen))
        render(matchingEatery)
    }
})

const render = (eateries) => {
    let eateryCard = []
        eateryCard.push(EateryHTMLConverter(eateries))
    contentTarget.innerHTML = eateryCard.join("")
}