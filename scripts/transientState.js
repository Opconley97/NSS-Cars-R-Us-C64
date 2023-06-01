const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "wheelId": 0
}

export const setPaint = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setFabric = (chosenFabric) => {
    transientState.interiorId = chosenFabric
}

export const setTechnology = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
}

export const setWheel = (chosenWheel) => {
    transientState.wheelId = chosenWheel
}

export const saveOptionsSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}