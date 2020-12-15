import { useAttractions } from "../attractions/AttractionProvider.js"
import { useParks } from "../parks/ParkProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { getItineraries, useItineraries, saveItineraries } from "./ItineraryProvider.js";
import { itineraryHTMLConverter } from "./Itinerary.js";

const contentTarget = document.querySelector(".content__saved-itineraries")
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
      const parkRelationshipObject = getParkRelationships(itinerary)
      const attractionRelationshipObject = getAttractionRelationships(itinerary)
      const eateryRelationshipObject = getEateryRelationships(itinerary)
      const parkObjects = convertParkIds(parkRelationshipObject)
      const attractionObjects = convertAttractionIds(attractionRelationshipObject)
      const eateryObjects = convertEateryIds(eateryRelationshipObject)
      const html = itineraryHTMLConverter(parkObject, attractionObject, eateryObject)
      return html
    }).join("")
}

export const itineraryList = () => {
    getItineraries()
        .then(() => {
            parks = useParks()
            attractions = useAttractions()
            eateries = useEateries()
            itineraryCollection = useItineraries()

            render(itineraryCollection)
        })
}

const getParkRelationships = (park) => {
  const relatedParks = parks.find(it => it.parkID === park.id)
  return relatedParks
}

const getAttractionRelationships = (attraction) => {
  const relatedAttractions = attractions.find(it => it.attractionID === attraction.id)
  return relatedAttractions
}

const getEateryRelationships = (eatery) => {
  const relatedEateries = eateries.find(it => it.eateryID === eatery.id)
  return relatedEateries
}

const convertParkIds = (relationships) => {
  const parkObject = relationships.map(rp => {
    return parks.find(park => park.id === rp.parkID)
  })
  return parkObject
}

const convertAttractionIds = (relationships) => {
  const attractionObject = relationships.map(ra => {
    return attractions.find(attraction => attraction.id === ra.attractionID)
  })
  return attractionObject
}

const convertEateryIds = (relationships) => {
  const eateryObject = relationships.map(re => {
    return eateries.find(eatery => eatery.id === re.eateryID)
  })
  return eateryObject
}

let park = ""
let attraction = ""
let eatery = ""

// eventHub.addEventListener('parkChosen', event => {
//   if (event.detail.parkThatWasChosen!=="0"){
//     park = event.detail.parkThatWasChosen
//   }
// })

// eventHub.addEventListener('attractionChosen', event => {
//   if (event.detail.eateryThatWasChosen!=="0"){
//     attraction = event.detail.attractionThatWasChosen
//   }
// })

// eventHub.addEventListener('eateryChosen', event => {
//   if (event.detail.eateryThatWasChosen!=="0"){
//     eatery = event.detail.eateryThatWasChosen
//   }
// })


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
