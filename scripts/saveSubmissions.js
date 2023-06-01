import { saveOptionsSubmission } from "./transientState.js";

const handleSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveOptionsSubmission()
    }
}

export const saveSubmission = () => {
    document.addEventListener("click", handleSubmissionClick)

    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}