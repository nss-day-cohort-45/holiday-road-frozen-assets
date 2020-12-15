export const ParkDetailsHTMLgenerator = (park) => {
  const randomInt = () => {
    let arrayLength = park.images.length;
    return Math.floor(Math.random() * Math.floor(arrayLength))
  }

  let imageNumber = randomInt();

  return `
  <div class="park-details">
    <h2>${park.fullName}</h2>
    <p class="park-details__location bold">${park.addresses[0].city}, ${park.addresses[0].stateCode}</p>
    <p class="park-details__description">${park.description}</p>
    <div class="park-details__subcontainer">
    <div class="park-details__activities">
    <h4>Activities: </h4>
    <div>
      ${park.activities.map((activity)=>{
        return `<p>${activity.name}</p>`
      }).join('')}
    </div>
    </div>
    <div class="park-details__contact">
    <h4>Info:</h4>
    <a href="${park.url}" target="_blank" rel="noreferrer">Website</a>
    <div class="park-details__address">
    <p>Address: </p>
    <p>${park.addresses[0].line1}</p>
    <p>${park.addresses[0].city}, ${park.addresses[0].stateCode} ${park.addresses[0].postalCode}</p>
    </div>
    <div class="park-details__image">
      <img src="${park.images[imageNumber].url}" alt="${park.images[imageNumber].altText}">
    </div>
    </div>
    </div>
    <div class="park-details__closeButtonContainer">
    <button id="closeModal">Close</button>
    </div>
  </div>
  `

}