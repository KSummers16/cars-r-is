import { InteriorOptions } from "./interiors.js"
import { Orders, SaveOrder } from "./orders.js"
import { ColorOptions } from "./paints.js"
import { TechnologiesOptions } from "./technologies.js"
import { WheelsOptions } from "./wheels.js"

const render = async () => {
    const interiorsHTML = await InteriorOptions()
    const paintsHTML = await ColorOptions()
    const techHTML = await TechnologiesOptions()
    const wheelsHTML = await WheelsOptions()
    const buttonHTML = await SaveOrder()
    const ordersHTML = await Orders()





    const composedHTML = `
    <h1> Cars-R-Us </h1>
    <article class="choices">
        <section class="paint">
        <h2>Paint Options</h2>
        ${paintsHTML}
        </section>
        
        <section class="interior">
        <h2>Interior Options</h2>
        ${interiorsHTML}
        </section>

        <section class="technologies">
        <h2> Tech Packages</h2>
        ${techHTML}
        </section>

        <section class="wheels">
        <h2>Wheel Options</h2>
        ${wheelsHTML}
        </section>
        </article>



        <article class="order">
        ${buttonHTML}
        </article>

        <section class ="ordersPlaced">
        ${ordersHTML}
        </section>
    
    
    
    
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener("newOrderPlaced", render)