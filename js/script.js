document.getElementById('first-class-plus').addEventListener('click', function () {
    const quantityInput = document.getElementById('quantity-input');
    const quantityCount = parseInt(quantityInput.value);
    const quantityNewCount = quantityCount + 1;
    quantityInput.value = quantityNewCount;
    const priceTotal = quantityNewCount * 150;
    console.log(priceTotal);
})

document.getElementById('first-class-minus').addEventListener('click', function () {
    const quantityInput = document.getElementById('quantity-input');
    const quantityCount = parseInt(quantityInput.value);
    const quantityNewCount = quantityCount - 1;
    quantityInput.value = quantityNewCount;
    const priceTotal = quantityNewCount * 150;
    console.log(priceTotal);
})

function handleClassChanges() {

}