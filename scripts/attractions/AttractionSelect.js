import {useAttractions, getAttractions} from './AttractionProvider.js'

const contentTarget = document.querySelector(".dropdowns__attractions")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
  if (event.target.id === "attractionSelect") {
      const customEvent = new CustomEvent("attractionChosen", {
          detail: {
              attractionThatWasChosen: event.target.value
          }
      })

      eventHub.dispatchEvent(customEvent)
  }
})

export const attractionSelect = () => {
  getAttractions()
    .then( () => {
   
      const attractions = useAttractions()
      render(attractions)
    })
}

const render = () => {
    contentTarget.innerHTML += `
        <select class="dropdown" id="attractionSelect">
            <option value="0">Please select an attraction...</option>
            ${
                useAttractions().map(attractionObject => {
                  return `<option value=${attractionObject.id}>${attractionObject.name}</option>`
                })
            }
        </select>
    `
}