import { setFabric } from "./transientState.js";

const handleFabricChange = (changeEvent) => {
    if(changeEvent.target.id === "fabricOptions") {
        setFabric(parseInt(changeEvent.target.value))
    }
}


export const fabricOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const fabrics = await response.json()

    document.addEventListener("change", handleFabricChange)

    let fabricHTML = "<h2>Interiors</h2>"

    fabricHTML += '<select id="fabricOptions">'
    fabricHTML += '<option value="0">Select a fabric</option>'

    const divStringArray = fabrics.map(
        (fabric) => {
            return `<option value='${fabric.id}'>${fabric.fabric}</option>`
        }
    )

    fabricHTML += divStringArray.join("")
    fabricHTML += "</select>"

    return fabricHTML

}