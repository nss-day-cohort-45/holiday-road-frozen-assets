export const EateryHTMLConverter = (eatery) => {
    return `
        <section class="eatery-info">
        <div class="eatery__name">${eatery.businessName}</div>
        <div class="eatery__location">Located in ${eatery.city}, ${eatery.state}</div>
        <button id="eateries--${eatery.id}">Details</button>
        </section>`
}

const eventHub = document.querySelector(".dialog-container")

eventHub.addEventListener("click", clickEvent => {
    const [splitId, indexOne] = clickEvent.target.id.split("--")

    if ("eateries" === splitId) {
        const customEvent = new CustomEvent("showEateryClicked", {
            detail: {
                eateryThatWasChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})