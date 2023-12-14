import { setTechnologiesId } from "./transientstate.js";

const handleTechChoice = (event) => {
    if (event.target.id==="technologies"){
        const techChosen = event.target.value
        setTechnologiesId(parseInt(techChosen))
    }
}

export const TechnologiesOptions = async () => {
 const response = await fetch("http://localhost:8088/technologies")
 const technologies = await response.json()

 document.addEventListener("change", handleTechChoice)

 let techHTML = ""
 techHTML += '<select id="technologies">'
 techHTML += '<option value="0">Select a Tech Package</option>'

 const divStringArray = technologies.map(
 (technologies) => {
    return `<option value="${technologies.id}">${technologies.name}</option>`
 }

 )
techHTML += divStringArray.join("")
techHTML += "</select>"
return techHTML
}