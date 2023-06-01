import { setWheel } from "./transientState.js";

const handleWheelChange = (changeEvent) => {
    if(changeEvent.target.id === "wheelOptions") {
        setWheel(parseInt(changeEvent.target.value))
    }
}

export const wheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChange)

    let wheelsHTML = "<h2>Wheels</h2>"
    wheelsHTML += '<select id="wheelOptions">'
    wheelsHTML += '<option value="0">Select wheels</option>'

    const divStringArray = wheels.map(
        (wheel) => {
            return `<option value='${wheel.id}'>${wheel.type}</option>`
        }
    )
    wheelsHTML += divStringArray.join("")
    wheelsHTML += "</select>"
    return wheelsHTML
}