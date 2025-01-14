const totalElement = document.getElementById('total');

function updateTotal() {
    let total = 0;

    document.querySelectorAll('.menu-item').forEach(item => {
        const pricePerItem = parseInt(item.getAttribute('data-price')); // Harga satuan
        const quantity = parseInt(item.querySelector('.quantity').textContent); // Jumlah
        total += pricePerItem * quantity;
    });

    totalElement.textContent = total.toLocaleString('id-ID');
}

document.querySelectorAll('.menu-item').forEach(item => {
    const minusBtn = item.querySelector('.minus');
    const plusBtn = item.querySelector('.plus');
    const quantityElement = item.querySelector('.quantity');

    minusBtn.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityElement.textContent);
        do {
            if (currentQuantity > 1) {
                currentQuantity--;
                quantityElement.textContent = currentQuantity;
                updateTotal();
            }
        } while (false); 
    });

    plusBtn.addEventListener('click', () => {
        let currentQuantity = parseInt(quantityElement.textContent);
        do {
            currentQuantity++;
            quantityElement.textContent = currentQuantity;
            updateTotal();
        } while (false); 
    });
});

updateTotal();