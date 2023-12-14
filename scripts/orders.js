
import {placeOrder} from "./transientstate.js"



const handleOrderButtonClick = (clickEvent) => {
    if (clickEvent.target.id==="saveOrder"){
        placeOrder()
    }
}

export const SaveOrder = () => {
    document.addEventListener("click", handleOrderButtonClick)
    return "<button id='saveOrder'>Place Order</button>"
}


export const Orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=color&_expand=interior&_expand=technologies&_expand=wheels")
    const orders = await response.json()

    let ordersHTML = ""

    const divStringArray = orders.map(
        (orders) => {
            const orderPrice = orders.color.price + orders.interior.price + orders.technologies.price + orders.wheels.price
            

            return `<section class="ordersPlaced">
            <div>Order #${orders.id} cost ${orderPrice.toLocaleString("en-US",{
                style: "currency",
                currency: "USD"})}</div>
            
            </section>`
        }
    )
    ordersHTML += divStringArray.join("")
    return ordersHTML
}