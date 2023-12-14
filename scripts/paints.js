import { setColorId } from "./transientstate.js";

const handleColorChoice = (event) => {
    if (event.target.id==="colors"){
        const colorsChosen = event.target.value
        setColorId(parseInt(colorsChosen))
    }
}

export const ColorOptions = async () => {
    const response = await fetch("http://localhost:8088/colors")
    const colors = await response.json()

    document.addEventListener("change", handleColorChoice)

    let paintsHTML = ""
    paintsHTML += '<select id="colors">'
    paintsHTML += '<option value="0">Select a Paint color</option>'

    const divStringArray = colors.map(
        (colors) => {
            return `<option value="${colors.id}">${colors.name}</option>`
        }
    )
    
    paintsHTML += divStringArray.join("")
    paintsHTML += "</select>"
    return paintsHTML

}