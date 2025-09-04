function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

window.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image');
  const footerContainer = document.querySelector("footer");

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
          mainImage.src = thumb.src.replace('-thumbnail', '');
          thumbnails.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
   });
    if (footerContainer) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => {
        footerContainer.innerHTML = data;
      })
      .catch(err => console.error("Error loading footer:", err));
    }
});


document.addEventListener('DOMContentLoaded', function() {
  const minusBtn = document.querySelector('.quantity-btn.minus');
  const plusBtn = document.querySelector('.quantity-btn.plus');
  const quantityDisplay = document.querySelector('.quantity');
  let quantity = 0;

  minusBtn.addEventListener('click', function() {
      if (quantity > 0) {
          quantity--;
          quantityDisplay.textContent = quantity;
      }
  });

  plusBtn.addEventListener('click', function() {
      quantity++;
      quantityDisplay.textContent = quantity;
  });

  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  addToCartBtn.addEventListener('click', function() {
      if (quantity > 0) {
          alert(`Added ${quantity} item(s) to cart.`);
          quantity = 0;
          quantityDisplay.textContent = quantity;
      } else {
          alert('Please select at least one item to add to cart.');
      }
  });
});
