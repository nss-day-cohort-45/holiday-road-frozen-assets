export const EateryHTMLConverter = (eatery) => {
    return `
        <section class="eatery-info">
        <div class="eatery__name">${eatery.businessName}</div>
        <div class="eatery__location">Located in ${eatery.city}, ${eatery.state}</div>
        <button id="eateries--${eatery.id}">Details</button>
        </section>`
}

const eventHub = document.querySelector(".preview--eatery")

eventHub.addEventListener("click", clickEatery => {
    const [splitId, indexOne] = clickEatery.target.id.split("--")

    if ("eateries" === splitId) {
        const customEventEatery = new CustomEvent("showDetailsClicked", {
            detail: {
                eateryThatWasChosen: indexOne
            }
        })
        eventHub.dispatchEvent(customEventEatery)
    }
})