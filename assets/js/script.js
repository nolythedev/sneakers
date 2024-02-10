const mainImg = document.querySelector('#main-image');
let qty = document.querySelector('#quantity-amount')
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');

let qtyCount = 0;



// grid section TODO:
// on click of image1, image2 or image3, mainImage should be swapped to clicked image and main image should be swapped to the clicked image


// quantity section TODO:
// on click, + or - should increment the center text

function getQuantity() {
    plusBtn.addEventListener("click", () => {
        qtyCount += 1;
        qty.textContent = qtyCount;
        updateButtons();
    });

    minusBtn.addEventListener("click", () => {
        qtyCount -= 1;
        qty.textContent = qtyCount;
        updateButtons();
    });

    updateButtons(); // Call the updateButtons function initially
}

function updateButtons() {
    if (qtyCount === 0) {
        minusBtn.disabled = true;
    } else {
        minusBtn.disabled = false;
    }
}

getQuantity();