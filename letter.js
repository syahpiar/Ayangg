// ==========================
// LETTER.JS
// ==========================

const letterContent = document.getElementById("letterContent");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("music");


// ==========================
// MUSIC
// ==========================

if (music) {

    music.volume = 0.7;

    function startMusic() {

        if (music.paused) {

            music.play().catch(() => {
                // Browser memblokir autoplay.
                // Akan dicoba lagi setelah interaksi user.
            });

        }

    }

    // Coba langsung saat halaman letter dibuka
    window.addEventListener("load", () => {
        startMusic();
    });

    // Fallback untuk HP
    document.addEventListener("touchstart", startMusic, {
        once: true
    });

    document.addEventListener("click", startMusic, {
        once: true
    });

}


// ==========================
// LOAD SURAT
// ==========================

if (letterContent) {

    fetch(CONFIG.letterFile)

        .then(response => {

            if (!response.ok) {
                throw new Error("Surat tidak ditemukan");
            }

            return response.text();

        })

        .then(text => {

            typeWriter(text);

        })

        .catch(() => {

            letterContent.innerHTML =
                "Surat belum tersedia ❤️";

        });

}


// ==========================
// EFEK MENGETIK
// ==========================

function typeWriter(text) {

    let index = 0;

    letterContent.innerHTML = "";

    const speed = 35;

    function typing() {

        // Pastikan musik tetap berjalan
        if (music && music.paused) {

            music.play().catch(() => {});

        }

        if (index < text.length) {

            letterContent.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(typing, speed);

        }

    }

    typing();

}


// ==========================
// TOMBOL KE GALLERY
// ==========================

if (nextBtn) {

    nextBtn.addEventListener("click", () => {

        // Pastikan musik tetap aktif
        if (music) {

            music.play().catch(() => {});

        }

        window.location.href = "gallery.html";

    });

}
