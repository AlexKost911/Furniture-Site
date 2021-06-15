const api = async (click = 1) => {
    let calc = click * 8
    let x = calc - 8
    try {
        await fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(data => stor(data.slice(x, calc)))
    } catch (err) {
        console.log(err)
    }
}
api()
let stor = (data) => {
    let products = document.getElementById("products")
    data.forEach(({ category, image, price, title }) => {
        let html = products.innerHTML
        let store = `
                <div class="store">
                <div class="hove"><div class="display"></div>
                <button class="addToCart">Add to cart</button>
                <span class="share">Share</span>
                <span class="like">Like</span></div>
                <img src="${image}"/>
                <div class="content">
                <p class="title">${title.length > 29 ? title.slice(0, 29) + "..." : title}</p>
                <p class="category">${category}</p>
                <p class="price">${price}$</p>
                </div>
                </div>`
        products.innerHTML = html + store

    })
    let addCartClick = () => {
        let addCart = document.getElementsByClassName("addToCart")
        for (let i = 0; i < addCart.length; i++) {
            addCart[i].addEventListener("click", () => {
                console.log("Add to cart")
            })
        }
    }
    addCartClick()
}
let num = 2
let button = document.getElementById("click")
button.addEventListener("click", () => {
    let a = num++
    api(a)
    console.log("Show more")
})

let shopNow = document.getElementById("shop_now")
shopNow.addEventListener("click", () => console.log("Shop Now"))

let prev = document.getElementById("prev")
prev.addEventListener("click", () => console.log("Prev"))

let next = document.getElementById("next")
next.addEventListener("click", () => console.log("Next"))

let telegram = document.getElementById("telegram")
telegram.addEventListener("click", () => console.log("Telegram"))


