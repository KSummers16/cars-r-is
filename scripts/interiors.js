import { setInteriorId } from "./transientstate.js";

const handleInteriorChoice = (event) => {
    if (event.target.id==="interiors"){
        const interiorOption = event.target.value
        setInteriorId(parseInt(interiorOption))
    }
}

export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let interiorsHTML = ""
    interiorsHTML+= '<select id="interiors">'  
    interiorsHTML+= '<option value="0">Select an Interior option</option>'

    const divStringArray = interiors.map(
        (interiors) => {
            return `<option value="${interiors.id}">${interiors.name}</option>`
        }

    )
    interiorsHTML += divStringArray.join("")
    interiorsHTML += "</select>"
    return interiorsHTML
}