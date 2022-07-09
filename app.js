// Common Function for increasing or decreasing value
function numberChanger(product, price, isIncrease) {
    const itemNumber = document.getElementById(product + '-input');
    if(isIncrease == true) {
        itemNumber.value = parseInt(itemNumber.value) + 1;
        const itemTotal = document.getElementById(product + '-total');
        itemTotal.innerText = itemNumber.value * price;
        
        // const subtotal = document.getElementById('subtotal');
        // subtotal.innerText = itemTotal.innerText + 
    }
    else if(itemNumber.value >= 1) {
        itemNumber.value = parseInt(itemNumber.value) - 1; 
        const itemTotal = document.getElementById(product + '-total');
        itemTotal.innerText = itemNumber.value * price;
    }
    calculateSubtotal();
}
// Creating subtotal calculating function
function calculateSubtotal() {
    const phoneInput = document.getElementById('phone-input').value;
    const caseInput = document.getElementById('case-input').value;
    const taxAmount = document.getElementById('tax-total');
    const totalAmount = document.getElementById('total-amount');
    const totalPhonePrice = parseInt(phoneInput) * 1219;
    const totalCasePrice = parseInt(caseInput) * 59;
    const subtotalPrice = document.getElementById('subtotal');
    subtotalPrice.innerText = totalPhonePrice + totalCasePrice;
    taxAmount.innerText = subtotalPrice.innerText / 10;
    totalAmount.innerText = parseFloat(subtotalPrice.innerText) + parseFloat(taxAmount.innerText);
}

// Added Phone-product increese and decrease event handler 
document.getElementById('phone-plus').addEventListener('click', function() {
    numberChanger('phone', '1219', true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    numberChanger('phone', '1219', false);
});

// Added Case-product increase and decrease event handler
document.getElementById('case-plus').addEventListener('click', function() {
    numberChanger('case', '59', true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    numberChanger('case', '59', false);
})