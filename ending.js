// Floating Hearts
for(let i = 0; i < 35; i++){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 6) + "s";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    document.getElementById("hearts").appendChild(heart);
}

// ===== AUTO LOOP GALLERY =====

const gallery = document.querySelector(".gallery-scroll");

let speed = 0.5; // semakin kecil semakin pelan

function autoScroll(){

    if(!gallery) return;

    gallery.scrollLeft += speed;

    // ketika sampai ujung, kembali ke awal
    if(gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth){

        gallery.scrollLeft = 0;

    }

    requestAnimationFrame(autoScroll);

}

requestAnimationFrame(autoScroll);

// Saat disentuh, hentikan sebentar
gallery.addEventListener("touchstart",()=>{

    speed = 0;

});

gallery.addEventListener("touchend",()=>{

    setTimeout(()=>{

        speed = 0.5;

    },1500);

});
