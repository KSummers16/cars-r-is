const transientState = {
    "colorId": 0,
    "interiorId": 0,
    "technologiesId": 0,
    "wheelsId": 0
}

export const setColorId = (chosenColor) => {
    transientState.colorId=chosenColor
}

export const setInteriorId = (chosenInterior) => {
    transientState.interiorId=chosenInterior
}

export const setTechnologiesId = (chosenTechnology) => {
    transientState.technologiesId=chosenTechnology
}

export const setWheelsId = (chosenWheels) => {
    transientState.wheelsId=chosenWheels
}

export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
}