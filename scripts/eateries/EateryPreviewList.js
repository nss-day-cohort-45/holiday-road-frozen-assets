import { useEateries } from './EateryProvider.js'
import { eateryConverter } from "./Eatery.js";

const contentTarget = document.querySelector(".preview--eatery")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("eaterySelect", () => {
  useEateries()
})

  
  eventHub.addEventListener("eateryChosen", event => {
    if(event.detail.eateryThatWasChosen !== "0") {

    
    const eateries = useEateries()
    const eatery = eateries.find((table) => table.id === parseInt(event.detail.eateryThatWasChosen))
  
    const matchingEatery = eateries.filter( (table) => table.id === eatery.id)
  
    
    render(matchingEatery)
            }
        }
    )


    const render = (eateries) => {
      let eateryCard = []
      for (const table of eateries) {
        eateryCard.push(eateryConverter(table))
      }
      contentTarget.innerHTML = eateryCard.join("")
    }

    eventHub.addEventListener('click', (clickEvent)=> {
      if (!clickEvent.target.id.startsWith('eateryDetailButton--')) {
        return;
      }
      const [unused, eateryId] = clickEvent.target.id.split('--');
    
      const customEvent = new CustomEvent('eateryDetailsClicked', {
        detail: {
          eateryId: eateryId
        }
      })
      eventHub.dispatchEvent(customEvent);
    })