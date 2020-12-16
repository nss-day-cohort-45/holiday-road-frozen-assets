export const eateryConverter = (eatery) => {
    return `
        <section class="eatery-info">
        <input type="hidden" id="selectedEatery" value="${eatery.id}">
        <div class="eatery-nameAndLocation">
        <h4 class="eatery__name">${eatery.businessName}</h4>
        <div class="eatery__location bold">${eatery.city}, ${eatery.state}</div>
        </div>
        <div class="detailButton">
        <button id="eateries--${eatery.id}">Details</button>
        </div>
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
