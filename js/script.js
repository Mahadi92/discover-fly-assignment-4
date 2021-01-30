// Quantity Increase Decrease function
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

// Calculate Total function 
function calculateTotal() {
    const firstClassQuantityCount = getInputValue('first');
    const economyClassQuantityCount = getInputValue('economy');

    const subtotal = firstClassQuantityCount * 150 + economyClassQuantityCount * 100;
    document.getElementById('subtotal').innerText = subtotal;

    const vat = subtotal * 0.1;
    document.getElementById('vat').innerText = vat;

    const total = subtotal + vat;
    document.getElementById('total').innerText = total;

}
// Getting input value || Atomic Function 
function getInputValue(quantity) {
    const quantityInput = document.getElementById(quantity + '-class-quantity-input');
    const quantityCount = parseInt(quantityInput.value);
    return quantityCount;
}

// Booking confirm function || Extra function
document.getElementById('book-now').addEventListener('click', function () {

    const firstClassQuantityCount = getInputValue('first');
    const economyClassQuantityCount = getInputValue('economy');
    const totalAmount = document.getElementById('total');
    const total = parseInt(totalAmount.innerText);


    if (total > 0) { //validation
        document.getElementById('booked').style.display = "block";
        document.getElementById('first-class-ticket-quantity').innerText = firstClassQuantityCount;
        document.getElementById('economy-class-ticket-quantity').innerText = economyClassQuantityCount;
        document.getElementById('total-money').innerText = total;

    } else {
        alert('You do not select any ticket option');
    }


})







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