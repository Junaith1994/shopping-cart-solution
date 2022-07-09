// Creating common function for increasing or decreasing value
function getTotalItem(product, isAdd) {
    const itemNumber = document.getElementById(product + '-input');
    if (isAdd == true) {
        itemNumber.value = parseInt(itemNumber.value) + 1;
    }
    else if (itemNumber.value > 0) { 
    itemNumber.value = parseInt(itemNumber.value) - 1; 
    }
    // Calculate Total item price
    calculateTotalPrice();
} 

// Creating total price calculative function
function calculateTotalPrice() {
    const phoneInput = document.getElementById('phone-input');
    const caseInput = document.getElementById('case-input');
    const phoneTotal = document.getElementById('phone-total');
    const caseTotal = document.getElementById('case-total');
    const subTotal = document.getElementById('subtotal');
    const taxTotal = document.getElementById('tax-total');
    const totalAmount = document.getElementById('total-amount');
    phoneTotal.innerText = parseInt(phoneInput.value) * 1219;
    caseTotal.innerText = parseInt(caseInput.value) * 59;
    subTotal.innerText = parseFloat(phoneTotal.innerText) + parseFloat(caseTotal.innerText);
    taxTotal.innerText = subTotal.innerText / 10;
    totalAmount.innerText = parseFloat(subTotal.innerText) + parseFloat(taxTotal.innerText);
}
// Adding increase/decrease event handler in phone
document.getElementById('phone-plus').addEventListener('click', function() {
    getTotalItem('phone', true);
})
document.getElementById('phone-minus').addEventListener('click', function() {
    getTotalItem('phone', false);
})

// Adding increase/decrease event event handler in case
document.getElementById('case-plus').addEventListener('click', function() {
    getTotalItem('case', true);
})
document.getElementById('case-minus').addEventListener('click', function() {
    getTotalItem('case', false);
})