import { setTechnology } from "./transientState.js";

const handleTechnologyChange = (changeEvent) => {
    if(changeEvent.target.id === "technologyChoices") {
        setTechnology(parseInt(changeEvent.target.value))
    }
}

export const technologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    document.addEventListener("change", handleTechnologyChange)

    let technologyHTML = "<h2>Technology</h2>"
    technologyHTML += '<select id="technologyChoices">'
    technologyHTML += '<option value="0">Select a technology</option>'

    const divStringArray = technologies.map(
        (technology) => {
            return `<option value='${technology.id}'>${technology.package}`
        }
    )

    technologyHTML += divStringArray.join("")
    technologyHTML += "</select>"

    return technologyHTML
}