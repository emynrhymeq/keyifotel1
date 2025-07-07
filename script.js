
  const images = [
    "img/44.jpg",
    "img/5.jpg",
    "img/3.jpg",
    "img/61.jpg",
    "img/13.jpg",
    "img/23.jpg",
    "img/31.jpg"
  ];

  let currentIndex = 0;

  function openSlider(index) {
    currentIndex = index;
    document.getElementById("sliderImage").src = images[currentIndex];
    document.getElementById("sliderOverlay").style.display = "flex";
  }

  function closeSlider() {
    document.getElementById("sliderOverlay").style.display = "none";
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("sliderImage").src = images[currentIndex];
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("sliderImage").src = images[currentIndex];
  }

  // Mobil kaydırma (touch desteği)
  let startX = 0;
  document.getElementById("sliderOverlay").addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  document.getElementById("sliderOverlay").addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();      // sola kaydır
    if (endX - startX > 50) prevSlide();      // sağa kaydır
  });
  document.addEventListener("keydown", function (e) {
  const isSliderOpen = document.getElementById("sliderOverlay").style.display === "flex";
  if (!isSliderOpen) return;

  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "Escape") {
    closeSlider();
  }
});





