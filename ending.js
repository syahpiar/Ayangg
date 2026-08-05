// ======================
// Floating Hearts
// ======================

const hearts = document.getElementById("hearts");

for(let i = 0; i < 35; i++){

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 6) + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.fontSize = (18 + Math.random() * 18) + "px";

    hearts.appendChild(heart);

}

// ======================
// Auto Slide Gallery
// ======================

const gallery = document.querySelector(".gallery-scroll");

if(gallery){

    let speed = 1;

    function slide(){

        gallery.scrollLeft += speed;

        if(gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth){

            gallery.scrollLeft = 0;

        }

        requestAnimationFrame(slide);

    }

    requestAnimationFrame(slide);

}
