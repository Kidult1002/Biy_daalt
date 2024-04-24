var pricePerItem = 38900;
var DeliveryPrice = 5000;

function changeQuantity(change, event) {
    event.preventDefault(); 
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if (currentQuantity < 1) currentQuantity = 0;
    quantityInput.value = currentQuantity;
    document.getElementById('totalQuantity').textContent = currentQuantity;
    
    var totalPrice = currentQuantity * pricePerItem;
    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString();
    var LastPrice = totalPrice + DeliveryPrice;
    document.getElementById('LastPrice').textContent = LastPrice.toLocaleString();
}