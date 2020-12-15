export const attractionHTMLConverter = (attractionObject) => {
  return `
  <div class="attractionContainer">
      <section class="attraction">
          <div class="attractionName">Name: ${ attractionObject.name }</div>
          <div class="attractionLocation">Location: ${attractionObject.city}, ${attractionObject.state}</div>
      </section>
      <div class="detailButton" id="attractionDetailButton--id">
        <button class="attractionDetails">Details</button>
      </div>
  </div>
  `
}

