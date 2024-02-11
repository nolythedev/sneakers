const mainImg = document.querySelector('#main-image');
let qty = document.querySelector('#quantity-amount')
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');

let imageMain = document.querySelector('#main-image');
let productImage = document.querySelectorAll('.product');

let currentImage = document.querySelector('#main-image').dataset.image;
let qtyCount = 0;

// console.log(currentImage
console.log('current image:' + currentImage);

// grid section TODO:
// on click of image1, image2 or image3, mainImage should be swapped to clicked image and main image should be swapped to the clicked image
for (let i = 0; i < productImage.length; i++) {
    const product = productImage[i];
    console.log(product.dataset.image);
    
product.addEventListener('click', (event) => {
    event.preventDefault();
    // event.target.style.backgroundImage = `url(../assets/images/${currentImage}.jpg)`;
    
    imageMain.style.backgroundImage = `url(../assets/images/${event.target.dataset.image}.jpg)`;
    imageMain.dataset.image = event.target.dataset.image;
    event.target.dataset.image = currentImage;
    event.target.style.backgroundImage = `url(../assets/images/${currentImage}.jpg)`;
    currentImage = imageMain.dataset.image;


});

}


// quantity section TODO:
// on click, + or - should increment the center text

function getQuantity() {
    plusBtn.addEventListener('click', () => {
        qtyCount += 1;
        qty.textContent = qtyCount;
        updateButtons();
    });

    minusBtn.addEventListener('click', () => {
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