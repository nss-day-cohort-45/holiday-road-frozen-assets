import { getItineraries, useItineraries } from "./ItineraryProvider.js";
import { itineraryHTMLConverter } from "./Itinerary.js";

const contentTarget = document.querySelector(".itineraryList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("itineraryStateChanged", () => {
  itineraryList()
})

const render = (itineraryArray) => {
    const itineraryStrings = itineraryArray.map(
        (itinerary) => {
          return itineraryHTMLConverter(itinerary)
        }
    ).join("")

    contentTarget.innerHTML = itineraryStrings
}

export const itineraryList = () => {
    getItineraries()
        .then(() => {
            const allItineraries = useItineraries()
            render(allItineraries)
        })
}