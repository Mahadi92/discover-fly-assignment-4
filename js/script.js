function handleClassChanges(classes, isIncrease) {
    const quantityInput = document.getElementById(classes + '-class-quantity-input');
    const quantityCount = parseInt(quantityInput.value);
    let quantityNewCount = quantityCount;
    if (isIncrease == true) { //seperate Increase and Decrease 
        quantityNewCount = quantityCount + 1;
    }
    if (isIncrease == false && quantityNewCount > 0) {
        quantityNewCount = quantityCount - 1;
    }
    quantityInput.value = quantityNewCount;

    let priceTotal = 0;
    if (classes == 'first') { //seperate class prices
        priceTotal = quantityNewCount * 150;
    }
    if (classes == 'economy') {
        priceTotal = quantityNewCount * 100;
    }
    calculateTotal();
}

function calculateTotal() {
    const firstClassQuantityInput = document.getElementById('first-class-quantity-input');
    const firstClassQuantityCount = parseInt(firstClassQuantityInput.value);

    const economyClassQuantityInput = document.getElementById('economy-class-quantity-input');
    const economyClassQuantityCount = parseInt(economyClassQuantityInput.value);

    const subtotal = firstClassQuantityCount * 150 + economyClassQuantityCount * 100;
    document.getElementById('subtotal').innerText = subtotal;

    const vat = subtotal * 0.1;
    document.getElementById('vat').innerText = vat;

    const total = subtotal + vat;
    document.getElementById('total').innerText = total;

}







//----------Increase 
// document.getElementById('first-class-plus').addEventListener('click', function () {
//     const quantityInput = document.getElementById('quantity-input');
//     const quantityCount = parseInt(quantityInput.value);
//     const quantityNewCount = quantityCount + 1;
//     quantityInput.value = quantityNewCount;
//     const priceTotal = quantityNewCount * 150;
//     console.log(priceTotal);
// })

//-----------Decrease
// document.getElementById('first-class-minus').addEventListener('click', function () {
//     const quantityInput = document.getElementById('quantity-input');
//     const quantityCount = parseInt(quantityInput.value);
//     const quantityNewCount = quantityCount - 1;
//     quantityInput.value = quantityNewCount;
//     const priceTotal = quantityNewCount * 150;
//     console.log(priceTotal);
// })