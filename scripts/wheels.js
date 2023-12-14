import { setWheelsId } from "./transientstate.js";

const handleWheelsChoice = (event) => {
    if (event.target.id==="wheels"){
        const wheelsChosen = event.target.value
        setWheelsId(parseInt(wheelsChosen))
    }
}

export const WheelsOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelsChoice)

    let wheelsHTML = ""
    wheelsHTML += '<select id="wheels">'
    wheelsHTML += '<option value="0">Select a Wheel Option</option>'

    const divStringArray = wheels.map(
        (wheels) => {
            return `<option value="${wheels.id}">${wheels.name}</option>`
        }

    )
        wheelsHTML += divStringArray.join("")
        wheelsHTML += "</select>"
        return wheelsHTML

}