document.getElementById("signature").innerHTML =
"Love,<br>" + CONFIG.sender;

for(let i=0;i<40;i++){

    let heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.className="heart";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=(4+Math.random()*6)+"s";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    document.getElementById("hearts").appendChild(heart);

}