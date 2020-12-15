let attractions = []

export const getAttractions = () => {
  return fetch("http://holidayroad.nss.team/bizarreries")
      .then(response => response.json())
      .then(
        parsedAttractions => {
          attractions = parsedAttractions
        }
      )
  
}


export const useAttractions = () => attractions.slice()


// const dispatchStateChangeEvent = () => {
//   const attractionStateChangedEvent = new CustomEvent("attractionStateChanged")

//   eventHub.dispatchEvent(attractionStateChangedEvent)
// }

// export const saveTrip = trip => {
//   return fetch('http://localhost:8088/db', {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(trip)
//   })
//   .then(getAttractions)
//   .then(dispatchStateChangeEvent)
// }