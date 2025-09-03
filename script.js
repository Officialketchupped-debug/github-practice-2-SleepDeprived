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
