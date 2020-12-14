import { getEateries, useEateries } from "./EateryProvider.js"


const contentTarget = document.querySelector(".dropdowns__eateries")
const eventHub = document.querySelector(".content")

eventHub.addEventListener("change", event => {
    if (event.target.id === "eaterySelect") {
        const customEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})



export const eaterySelect = () => {
    getEateries()
        .then(() => {
            const eateries = useEateries()
            render(eateries)
        })
}

const render = eateriesCollection => {

    contentTarget.innerHTML += `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery...</option>
            ${eateriesCollection.map((eatery) => `
                    <option value="${eatery.id}">
                        ${eatery.businessName}
                    </option>
                 `)
        }
        </select>
    `
}