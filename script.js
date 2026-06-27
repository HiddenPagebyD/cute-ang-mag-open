let step = 0;

function nextStep() {

    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const button = document.getElementById("mainButton");

    step++;

    switch(step){

        case 1:
            title.innerHTML = "⚠️ Security Alert";
            message.innerHTML = "Malware detected on your device!";
            break;

        case 2:
            title.innerHTML = "🛡️ Security Scan";
            message.innerHTML = "Scanning device... 27%";
            break;

        case 3:
            title.innerHTML = "🛡️ Security Scan";
            message.innerHTML = "Scanning device... 64%";
            break;

        case 4:
            title.innerHTML = "🛡️ Security Scan";
            message.innerHTML = "Scanning device... 100%";
            break;

        case 5:
            title.innerHTML = "⚠️ Critical Threat Found";
            message.innerHTML = "1 threat detected. Continue to remove it.";
            button.innerHTML = "Continue";
            break;

        case 6:
            showConfession();
            break;
    }

}

function showConfession(){

    document.querySelector(".container").innerHTML = `

        <h1>Dianne likes you... ❤️</h1>

        <p>Do you like her back? 🥺</p>

        <button class="yes" onclick="yesClicked()">
            YES ❤️
        </button>

        <button id="noButton">
            NO
        </button>

    `;

    const noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", moveNoButton);

}

function moveNoButton(){

    const noButton = document.getElementById("noButton");

    noButton.style.position = "absolute";

    noButton.style.left = Math.random() * (window.innerWidth - 120) + "px";

    noButton.style.top = Math.random() * (window.innerHeight - 60) + "px";

}

function yesClicked(){

    document.querySelector(".container").innerHTML = `

        <h1 class="success">❤️ SHE SAID YES!! ❤️</h1>

        <p class="success-text">
            You just made Dianne's heart the happiest. 🥹💖
        </p>

    `;

    // Big confetti burst
    confetti({
        particleCount:300,
        spread:180,
        origin:{y:0.6}
    });

    // Keep firing confetti for 3 seconds
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount:6,
            angle:60,
            spread:80,
            origin:{x:0}
        });

        confetti({
            particleCount:6,
            angle:120,
            spread:80,
            origin:{x:1}
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}