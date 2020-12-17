import { getAttractions, useAttractions } from "../attractions/AttractionProvider.js"
import { getParks, useParks } from "../parks/ParkProvider.js"
import { getEateries, useEateries } from "../eateries/EateryProvider.js"
import { getItineraries, useItineraries, saveItineraries } from "./ItineraryProvider.js";
import { itineraryHTMLConverter } from "./Itinerary.js";

const contentTarget = document.querySelector(".content__saved-itineraries-content")
const eventHub = document.querySelector(".container")

let parks = []
let attractions = []
let eateries = []
let itineraryCollection = []

eventHub.addEventListener("itineraryStateChanged", () => {
  itineraryList()
})

const render = (itineraryCollection) => {
    contentTarget.innerHTML = itineraryCollection.map(itinerary => {
      const parkObject = getParkObject(itinerary)
      const attractionObject = getAttractionObject(itinerary)
      const eateryObject = getEateryObject(itinerary)
      const html = itineraryHTMLConverter(parkObject, attractionObject, eateryObject)
      return html
    }).join("")
}

export const itineraryList = () => {
    getItineraries()
        .then(getParks)
        .then(getAttractions)
        .then(getEateries)
        .then(() => {
            parks = useParks()
            attractions = useAttractions()
            eateries = useEateries()
            itineraryCollection = useItineraries()

            render(itineraryCollection)
        })
}

const getParkObject = (park) => {
  const matchingPark = parks.find(it => park.parkID === it.id)
  return matchingPark
}

const getAttractionObject = (attraction) => {
  const matchingAttraction = attractions.find(it => parseInt(attraction.attractionID) === it.id)
  return matchingAttraction
}

const getEateryObject = (eatery) => {
  const matchingEatery = eateries.find(it => parseInt(eatery.eateryID) === it.id)
  return matchingEatery
}

const buttonStatus = {
  isParkChosen: false,
  isAttractionChosen: false,
  isEateryChosen: false
}

const buttonEnabler = () => {
  if (buttonStatus.isParkChosen && buttonStatus.isAttractionChosen && buttonStatus.isEateryChosen) {
    document.querySelector("#saveItinerary").disabled = false
  }
}

eventHub.addEventListener("parkChosen", () => {
  buttonStatus.isParkChosen = true
  buttonEnabler()
})

eventHub.addEventListener("attractionChosen", () => {
  buttonStatus.isAttractionChosen = true
  buttonEnabler()
})

eventHub.addEventListener("eateryChosen", () => {
  buttonStatus.isEateryChosen = true
  buttonEnabler()
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveItinerary") {
    const park = document.querySelector("#selectedPark").value
    const attraction = document.querySelector("#selectedAttraction").value
    const eatery = document.querySelector("#selectedEatery").value
      const newItinerary = {
          parkID: park,
          attractionID: attraction,
          eateryID: eatery,
      }

      saveItineraries(newItinerary)
  }
})

