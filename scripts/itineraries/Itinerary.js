export const itineraryHTMLConverter = (park, attraction, eatery) => {
  return `
      <section class="itinerary">
          <div class="itinerary__park"><b>Park:</b> ${park.fullName}</div>
          <div class="itinerary__attraction"><b>Attraction:</b> ${attraction.name}</div>
          <div class="itinerary__eatery"><b>Restaurant:</b> ${eatery.businessName}</div>
      </section>
  `
}