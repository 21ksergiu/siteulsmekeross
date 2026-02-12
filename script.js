const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const main = document.getElementById("main");
const finalMessage = document.getElementById("final-message");
const heartOverlay = document.getElementById("heart-overlay");
const audio = document.getElementById("audio");

let size = 20;

noBtn.addEventListener("click", () => {
    size += 12;
    yesBtn.style.fontSize = size + "px";
    yesBtn.style.padding = size / 1.6 + "px";

    noBtn.style.position = "relative";
    noBtn.style.left = Math.random() * 50 - 25 + "px";
    noBtn.style.top = Math.random() * 50 - 25 + "px";

    spawnHeart();
});

yesBtn.addEventListener("click", () => {
    heartOverlay.classList.add("show");
    audio.play();

    setTimeout(() => {
        main.classList.add("hidden");
    }, 400);

    setTimeout(() => {
        finalMessage.classList.add("show");
    }, 1300);

    for (let i = 0; i < 25; i++) spawnHeart();
});

function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = ["💖","💘","💗","💓"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (Math.random() * 18 + 18) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}
