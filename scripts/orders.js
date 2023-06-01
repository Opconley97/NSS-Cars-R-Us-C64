export const orders = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=wheel&_expand=technology")
    const orders = await response.json()

    let ordersHTML = "<h2>Custom Car Orders</h2>"

    const divStringArray = orders.map(
        (order) => {
            const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheel.price
            return `<div>
            Order #${order.id} costs $${orderPrice  }
            </div>`
        }
    )

    ordersHTML += divStringArray.join("")
    return ordersHTML
}