export const attractionHTMLConverter = (attractionObject) => {
  return `
  <div class="attractionContainer">
      <section class="attraction">
          <h4 class="attractionName">${ attractionObject.name }</h4>
          <p class="attractionLocation">${attractionObject.city}, ${attractionObject.state}</p>
      </section>
      <div class="detailButton" >
        <button id="attractionDetailButton--${attractionObject.id}" class="attractionDetails">Details</button>
      </div>
  </div>
  `
}

