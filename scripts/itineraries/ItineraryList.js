import { getItineraries, useItineraries, saveItineraries } from "./ItineraryProvider.js";
import { itineraryHTMLConverter } from "./Itinerary.js";

const contentTarget = document.querySelector(".content__saved-itineraries")
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
let park = ``
let attraction = ``
let eatery = ``

eventHub.addEventListener('parkChosen', event => {
  if (event.detail.parkThatWasChosen!=="0"){
    console.log(event.detail.parkThatWasChosen)
    park = event.detail.parkThatWasChosen.value
    return park
  }
})

eventHub.addEventListener('attractionChosen', event => {
  if (event.detail.eateryThatWasChosen!=="0"){
    attraction = event.detail.attractionThatWasChosen.value
    return attraction
  }
})

eventHub.addEventListener('eateryChosen', event => {
  if (event.detail.eateryThatWasChosen!=="0"){
    eatery = event.detail.eateryThatWasChosen.value
    return eatery
  }
})


eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveItinerary") {
      const newItinerary = {
          park: park,
          attraction: attraction,
          eatery: eatery,
      }

      saveItineraries(newItinerary)
  }
})
