console.log('cart connected!!');
if(!sessionStorage.getItem('cart-mateando')){
    sessionStorage.setItem('cart-mateando', JSON.stringify([])) 
}

var cart = JSON.parse(sessionStorage.getItem('cart-mateando'));
const cartTotalItems = document.getElementById('cart-total-items');


const showProductInCart = (products = []) =>{

    const cartBox =  document.getElementById('cart-box')
    cartBox.innerHTML = null;

    if(products.length){
        products.forEach(({id, name, image, price, quantity}) => {
            cartBox.innerHTML += `
            <tr>
                    <td colspan="2">
                        <div class="d-flex align-items-center">
                            <img class="me-3" src="/images/productos/${image}" width="80px" alt="">
                            <div style="margin: 0 0 0 10px;">
                                <p class="fs-4" >${name}</p>
                                <div class="d-flex">
                                    <button class="btn btn-sm btn-danger" onclick="decrementQuantity(${id},${price})"><i class="fas fa-minus"></i></button>
                                    <input id="item-counter${id}" type="text" class="form-control form-control-sm text-center mx-2" value="${quantity}" readonly style="border: none; border-radius: 0; width: 50px;" >
                                    <button class="btn btn-sm btn-success" onclick="incrementQuantity(${id},${price})"><i class="fas fa-plus"></i></button>
                                </div>
                            </div>
                         
                        </div>
                       
                        
                    </td>
                    <td style="vertical-align: middle"><h5>$ <span>${price}</span></h5></td>
                    <td style="vertical-align: middle"><h5>$ <span id="subtotal${id}">${(price * quantity).toFixed(0)}</span></h5></td>
                    <td style="vertical-align: middle; text-align: center;"> 
                        <button class="btn btn-danger" onclick="removeProduct(${id})"><i class="fas fa-trash-can"></i></button>
                    </td>
                  </tr>
            `
        })
        
    }else {
        cartBox.innerHTML += `
        <article >
            <h4 style="line-height: 44px">El carrito está vacío</h4>
        </article>
        `
    }
   
}

const showCartTotalItems = (count) => {
    if(cartTotalItems) {
        cartTotalItems.innerHTML = count
    }
}

window.onload = () => {
    showCartTotalItems(cart.length)
    if(document.getElementById('cart-box')){
        showProductInCart(cart)
    }
}

const addToCart = (id, name, price, image, quantity = 1) => { 

    const product = cart.find(item => item.id == id);

    if(product){

        const cartUpdated = cart.map(item => {
            if(item.id == id){
                item.quantity = item.quantity + 1
            }
            return item
        });
        sessionStorage.setItem('cart-mateando',JSON.stringify(cartUpdated))

    }else{
        const newProduct = {
            id,
            name,
            price,
            image,
            quantity
        }
        cart.push(newProduct)
        sessionStorage.setItem('cart-mateando',JSON.stringify(cart))

        showCartTotalItems(JSON.parse(sessionStorage.getItem('cart-mateando')).length)
    }
}

const removeProduct = (id) => {
    const cart = JSON.parse(sessionStorage.getItem('cart-mateando'))
    const cartUpdated = cart.filter(item => item.id != id);
    sessionStorage.setItem('cart-mateando',JSON.stringify(cartUpdated))

    showCartTotalItems(JSON.parse(sessionStorage.getItem('cart-mateando')).length)
    showProductInCart(cartUpdated)

}

const incrementQuantity = (id, price) => {
    const counter = document.getElementById('item-counter' + id)
    let currentValue = parseInt(counter.value);
    counter.value = currentValue + 1;
    modifyQuantity(id, currentValue + 1, price)
 };
 
 const decrementQuantity = (id, price) => {
    const counter = document.getElementById('item-counter' + id)
    let currentValue = parseInt(counter.value);
    if (currentValue > 1) {
       counter.value = currentValue - 1;
       modifyQuantity(id, currentValue - 1, price)
    }
 };

 const modifyQuantity = (id, quantity, price) => {
    const cart = JSON.parse(sessionStorage.getItem('cart-mateando'))
    const cartUpdated = cart.map(item => {
       if( item.id == id){
          item.quantity = quantity
       }
       return item
    });
    sessionStorage.setItem('cart-mateando',JSON.stringify(cartUpdated))
    document.getElementById('subtotal' + id).textContent = price * quantity
    
 }

 
 


