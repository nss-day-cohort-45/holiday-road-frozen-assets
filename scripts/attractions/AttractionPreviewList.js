import {useAttractions} from './AttractionProvider.js'
import { attractionHTMLConverter } from "./AttractionPreviewHTMLgenerator.js";

const attractionElement = document.querySelector(".preview--attraction")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionSelect", () => {
  useAttractions()
})

  
  eventHub.addEventListener("attractionChosen", event => {
    if(event.detail.attractionThatWasChosen !== "0") {

    
    const attractions = useAttractions()
    const attractionBizzareries = attractions.find((attraction) => attraction.id === parseInt(event.detail.attractionThatWasChosen))
  
    const matchingAttraction = attractions.filter( (attraction) => attraction.id === attractionBizzareries.id)
  
    
    render(matchingAttraction)
            }
        }
    )


    const render = (attractions) => {
      let attractionCards = []
      for (const attraction of attractions) {
        attractionCards.push(attractionHTMLConverter(attraction))
      }
      attractionElement.innerHTML = attractionCards.join("")
    }

    eventHub.addEventListener('click', (clickEvent)=> {
      if (!clickEvent.target.id.startsWith('attractionDetailButton--')) {
        return;
      }
      const [unused, attractionId] = clickEvent.target.id.split('--');
    
      const customEvent = new CustomEvent('attractionDetailClicked', {
        detail: {
          attractionId: attractionId
        }
      })
      eventHub.dispatchEvent(customEvent);
    })