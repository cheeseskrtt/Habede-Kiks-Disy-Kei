function checkAnswer() {
    const input = document.getElementById("usernameInput").value;
    const header = document.getElementById("myH1");
    const clickSound = new Audio("fah.mp3");

    if (input.toLowerCase() === "67") {
        setTimeout(() => {
            window.location.href = "kingemyu.html"; 
        }, 2000);
    } else if (input.toLowerCase() === "thursday") {
        setTimeout(() => {
            window.location.href = "kingemyu.html"; 
        }, 2000);
    } else if (input.toLowerCase() === "9:3:4") {
        setTimeout(() => {
            window.location.href = "kingemyu.html"; 
        }, 2000);
    } else {
        clickSound.play();
    }}