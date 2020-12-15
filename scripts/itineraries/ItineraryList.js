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

// Get 3 IDs. Somehow.
// Save IDs to object in db.
// Convert each object to HTML representation
// List in DOM

eventHub.addEventListener("itineraryStateChanged", () => {
  itineraryList()
})

const render = (itineraryCollection) => {
    contentTarget.innerHTML = itineraryCollection.map(itinerary => {
      const parkObject = getParkObject(itinerary)
      const attractionObject = getAttractionObject(itinerary)
      const eateryObject = getEateryObject(itinerary)
      console.log(parkObject, attractionObject, eateryObject)
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
  const matchingAttraction = attractions.find(it => attraction.attractionID === it.id)
  return matchingAttraction
}

const getEateryObject = (eatery) => {
  const matchingEatery = eateries.find(it => eatery.eateryID === it.id)
  return matchingEatery
}


eventHub.addEventListener('parkChosen', event => {
  if (event.detail.parkThatWasChosen!=="0"){
    park = event.detail.parkThatWasChosen.value
  }
})

eventHub.addEventListener('attractionChosen', event => {
  if (event.detail.eateryThatWasChosen!=="0"){
    attraction = event.detail.attractionThatWasChosen.value
  }
})

eventHub.addEventListener('eateryChosen', event => {
  if (event.detail.eateryThatWasChosen!=="0"){
    eatery = event.detail.eateryThatWasChosen.value
  }
})

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveItinerary") {
      const newItinerary = {
          parkID: park,
          attractionID: attraction,
          eateryID: eatery,
      }

      saveItineraries(newItinerary)
  }
})

