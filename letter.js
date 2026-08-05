// letter.js

const letterContent = document.getElementById("letterContent");
const nextBtn = document.getElementById("nextBtn");

// Memuat isi surat dari data/letter.txt
fetch(CONFIG.letterFile)
  .then(response => response.text())
  .then(text => {
    typeWriter(text);
  })
  .catch(() => {
    letterContent.innerHTML = "Surat belum tersedia ❤️";
  });

// Efek mengetik
function typeWriter(text) {
  let index = 0;
  letterContent.innerHTML = "";

  const speed = 35;

  function typing() {
    if (index < text.length) {
      letterContent.innerHTML += text.charAt(index);
      index++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// Tombol ke galeri
nextBtn.addEventListener("click", () => {
  window.location.href = "gallery.html";
});