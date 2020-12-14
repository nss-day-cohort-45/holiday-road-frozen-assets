import { getItineraries, useItineraries } from "./ItineraryProvider.js";
import { ItineraryHTMLConverter } from "./Itinerary.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".itineraryList")
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => {
  NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        // convert the notes objects to HTML with NoteHTMLConverter
        (note) => {
          return NoteHTMLConverter(note)
        }
    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}