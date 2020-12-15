export const AttractionDetailsHTMLgenerator = (attraction) => {
  return `
  <div class="attraction-details">
    <h2>${attraction.name}</h2>
    <p class="attraction-details__location bold">${attraction.city}, ${attraction.state}</p>
    <p class="attraction-details__description">${attraction.description}</p>
    <div class="attraction-details__closeButtonContainer">
    <button id="closeModal">Close</button>
    </div>
  </div>
  `
}