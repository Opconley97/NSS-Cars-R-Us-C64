import { setPaint } from "./transientState.js";

const handlePaintChainge = (changeEvent) => {
    if(changeEvent.target.id === "paintOptions") {
        setPaint(parseInt(changeEvent.target.value))
    }
}

export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChainge)

    let paintsHTML = "<h2>Paints</h2>"

    paintsHTML += '<select id="paintOptions">'
    paintsHTML += '<option value="0">Select a paint</option>'

    const divStringArray = paints.map(
        (paint) => {
            return `
                <option value='${paint.id}'>${paint.color}</option>
            `
        }
    )

    paintsHTML += divStringArray.join("")
    paintsHTML += "</select>"

    return paintsHTML
}