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
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
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