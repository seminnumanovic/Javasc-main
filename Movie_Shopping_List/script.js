let allTotal = 0;

function addMovie(element){
    let secondEl = element.closest('.buttonWrapper');
    let mainEl = secondEl.closest('.movie')
    let price = mainEl.querySelector('.price').innerText;
    price = price.substring(8);
    price = parseInt(price);

    let totalPrice = document.createElement('h4');
    let totalPriceDiv = document.querySelector('.totalPrice').appendChild(totalPrice);

    allTotal += price;

    totalPrice.innerText += ` $${allTotal}`;
    totalPrice.previousSibling.remove();

    element.innerText = 'Added';
    element.setAttribute('disabled', 'true');

}

// function removeFromCart(){
//     let totalPriceDiv = document.querySelector('.totalPrice');
//     let price = totalPriceDiv.querySelector('h4').innerText;
//     price = price.substring(1);
//     price = parseInt(price);
//     allTotal -= price;
//     // addButton.innerText = 'Add';
//     // addButton.removeAttribute('disabled');
//     console.log(allTotal);
// }
