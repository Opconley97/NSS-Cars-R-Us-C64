import { paintOptions } from "./paint.js";
import { fabricOptions } from "./fabric.js";
import { technologyOptions } from "./technology.js";
import { wheelOptions } from "./wheels.js";
import { saveSubmission } from "./saveSubmissions.js";
import { orders } from "./orders.js";

const render = async () => {
    const paintOptionsHTML = await paintOptions()
    const fabricOptionsHTML = await fabricOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const buttonHTML = await saveSubmission()
    const ordersHTML = await orders()


    const composedHTML = `
    <h1>Cars-R-Us</h1>

    <article class="choices">
        <section class="choices__paint options">
            ${paintOptionsHTML}
        </section

        <section class="choices__fabric options">
            ${fabricOptionsHTML}
        </section>
        
        <section class="choices__technology options">
            ${technologyOptionsHTML}
        </section>

        <section class="choices__wheel options">
            ${wheelOptionsHTML}
        </section>

    </article>

    <article class="order">
        ${buttonHTML}
    </article>

    <article class="customOrders">
        ${ordersHTML}
    </article>
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newSubmissionCreated", render)

render()