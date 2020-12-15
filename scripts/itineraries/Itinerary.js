export const itineraryHTMLConverter = (park, attraction, eatery) => {
  return `
      <section class="itinerary">
          <div class="itinerary__park">Park: ${park.name}</div>
          <div class="itinerary__attraction">Attraction: ${attraction.name}</div>
          <div class="itinerary__eatery">Restaurant: ${eatery.name}</div>
      </section>
  `
}