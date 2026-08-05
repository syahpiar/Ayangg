// ==========================
// Floating Hearts
// ==========================

const hearts = document.getElementById("hearts");

if(hearts){

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.className="heart";
        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=
        (18+Math.random()*18)+"px";

        heart.style.animationDuration=
        (4+Math.random()*6)+"s";

        heart.style.animationDelay=
        Math.random()*6+"s";

        hearts.appendChild(heart);

    }

}
