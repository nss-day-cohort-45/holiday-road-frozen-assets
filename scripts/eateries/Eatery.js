export const eateryConverter = (eatery) => {
    return `
    <div class="eateryContainer">
        <section class="eatery">
        <input type="hidden" id="chosenEatery" value="${eatery.id}">
            <h4 class="eateryName">${ eatery.businessName }</h4>
            <p class="eateryLocation">${eatery.city}, ${eatery.state}</p>
        </section>
        <div class="eateryDetailButton" >
          <button id="eateryDetailButton--${eatery.id}" class="eateryDetails">Details</button>
        </div>
    </div>
    `
  }
  
  