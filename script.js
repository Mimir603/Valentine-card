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


noBtn.addEventListener("touchstart", (e) => {

    const touch = e.touches[0];

    const fingerX = touch.clientX;
    const fingerY = touch.clientY;

    const rect = noBtn.getBoundingClientRect();

    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    // Вектор от пальца к центру кнопки
    const dx = btnCenterX - fingerX;
    const dy = btnCenterY - fingerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    // Нормализуем вектор
    const moveX = (dx / distance) * 120;
    const moveY = (dy / distance) * 120;

    noBtn.style.position = "fixed";
    noBtn.style.left = rect.left + moveX + "px";
    noBtn.style.top = rect.top + moveY + "px";
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