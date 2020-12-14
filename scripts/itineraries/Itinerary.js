export const itineraryHTMLConverter = (itineraryObject) => {
  return `
      <section class="itinerary">
          <div class="itinerary__park">Park: ${ itineraryObject.park }</div>
          <div class="itinerary__attraction">Attraction: ${ itineraryObject.attraction }</div>
          <div class="itinerary__eatery">Restaurant: ${ itineraryObject.eatery }</div>
      </section>
  `
}