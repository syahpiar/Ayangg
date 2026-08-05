// Floating Hearts

for(let i=0;i<35;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*6)+"s";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    document.getElementById("hearts").appendChild(heart);

}

// Auto Scroll Gallery

const gallery=document.querySelector(".gallery-scroll");

let direction=1;

setInterval(()=>{

    if(!gallery) return;

    gallery.scrollLeft+=direction;

    if(gallery.scrollLeft+gallery.clientWidth>=gallery.scrollWidth){

        direction=-1;

    }

    if(gallery.scrollLeft<=0){

        direction=1;

    }

},20);
