// promenljiva.getAttribute
// promenljiva.removeAtribute()
// promenljiva.closest
// .nextSibling
// .previousSibling
// promenljiva.innerHTML = '<element>itd</element>'
//promenljiva.substring(prvaPozicija, drugaPozicija)
///promenljiva.indexOf('karakter')

function addToCart(element){
    let mainEl = element.closest('.single-item');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('h3').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if(parseInt(quantity) > 0){

        price = price.substring(1);
        price = parseInt(price);
        let total = price * parseInt(quantity);

        cartItems.innerHTML += `<div class="cart-single-item>
                                    <h3>${name}</h3>
                                    <p>${price} x ${quantity} = ${total}</p>
                                </div>`;

        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');

    }else{
        alert('Dodaj kolicinu');
    }

    
    
    
}