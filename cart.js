const product = [
    {
        id: 0,
        image: 'img/f2.jpg',
        title: 'Designed Shirt',
        price: 20.00,
    },
    {
        id: 1,
        image: 'img/f3.jpg',
        title: 'Calvin Kelvin',
        price: 70.00,
    },
    {
        id: 2,
        image: 'img/f4.jpg',
        title: 'Shirt',
        price: 120.00,
    },
    {
        id: 3,
        image: 'products/f6.jpg',
        title: 'Full Shirt',
        price: 50.00,
    },
    {
        id: 4,
        image: 'products/n6.jpg',
        title: 'Shorts',
        price: 50.00,
    },
    {
        id: 5,
        image: 'img/f2.jpg',
        title: 'Shirt',
        price: 50.00,
    },
    {
        id: 6,
        image: 'products/f7.jpg',
        title: 'Pant',
        price: 150.00,
    },
    {
        id: 7,
        image: 'products/n4.jpg',
        title: 'Shirt',
        price: 190.00,
    },
    {
        id: 8,
        image: 'products/4.jpg',
        title: 'Nike',
        price: 90.00,
    },
    {
        id: 9,
        image: 'products/3.jpg',
        title: 'Sega',
        price: 70.00,
    },
    {
        id: 10,
        image: 'products/2.jpg',
        title: 'Campus',
        price: 50.00,
    },
    {
        id: 11,
        image: 'products/1.jpg',
        title: 'Nivia',
        price: 50.00,
    },
];

const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="items-1">
            <div class="product">
                <img class='images' src=${image} alt=""></img>
                <h2 class="product-name">${title}</h2>
                <h3 class="product-price">$ ${price}.00</h3>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to Cart</button>" +
        `</div>
        </div>`
    )
}).join('');

var cart = [];
function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your Cart is Empty";
        document.getElementById('total').innerHTML = "$" + 0 + ".00";
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById('total').innerHTML = "$" + total + ".00";

            return (
                `<div class=cart-item>
                    <div class=prod-img>
                        <img class=image src=${image} alt=""></img>
                    </div>
                    <div class=prod-details>
                    <p style='font-size:18px;'>${title}</p>
                    <h2 style='font-size:20px;'> $ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div></div>"
            );
        }).join('');
    }
}

let cartSec = document.querySelector('.sidebar');
let prodSec = document.querySelector('.container');
let cartIcon = document.querySelector('.cart-Icon');
let closeCart = document.querySelector('.close-cart');


cartIcon.onclick = () => {
    cartSec.classList.add("active");
    prodSec.classList.add("cart-product");
};
closeCart.onclick = () => {
    cartSec.classList.remove("active");
    prodSec.classList.remove("cart-product");

};
