// Handle Quantity and Selection
document.querySelectorAll('.menu-item').forEach(item => {
    const plusBtn = item.querySelector('.plus');
    const minusBtn = item.querySelector('.minus');
    const qtySpan = item.querySelector('.qty-number');
    const selectBtn = item.querySelector('.btn-select');

    // Plus Button
    plusBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtySpan.innerText);
        qtySpan.innerText = currentQty + 1;
    });

    // Minus Button
    minusBtn.addEventListener('click', () => {
        let currentQty = parseInt(qtySpan.innerText);
        if (currentQty > 1) {
            qtySpan.innerText = currentQty - 1;
        }
    });

    // Select Button Toggle
    selectBtn.addEventListener('click', () => {
        selectBtn.classList.toggle('selected');
        if (selectBtn.classList.contains('selected')) {
            selectBtn.innerText = "Added ✓";
        } else {
            selectBtn.innerText = "Select";
        }
    });
});