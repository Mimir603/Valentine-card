//ELements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".btn-no");
const yesBtn = document.querySelector(".btn-yes");

const title = document.getElementById("letter-title")
const bearImg = document.getElementById("letter-bear")
const buttons = document.getElementById("letter-buttons")
const finalText = document.getElementById("final-text")

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});


noBtn.addEventListener("click", () => {

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const padding = 20;

    const maxX = screenWidth - btnWidth - padding;
    const maxY = screenHeight - btnHeight - padding;

    const randomX = Math.random() * (maxX - padding) + padding;
    const randomY = Math.random() * (maxY - padding) + padding;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});



// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== fixed) {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transfom = `translate(-50%, -50%) scale${yesScale})`;
//     }else{
//         yesBtn.style.transfom = `translate(-50%, -50%) scale${yesScale})`;
//     }
// });

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeeeee!";

    bearImg.src = "cat_dance.gif"

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});