const eventHub = document.querySelector(".container")
let itineraries = []

export const useItineraries = () => itineraries.slice()

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

export const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItineraries => {
            itineraries = parsedItineraries
        })

}

export const saveItineraries = itinerary => {
    let stringifiedObj = JSON.stringify(itinerary)
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: stringifiedObj
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
}