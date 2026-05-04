function checkUsername() {
    const input = document.getElementById("usernameInput").value;
    const header = document.getElementById("myH1");

    if (input.toLowerCase() === "kia") {
        header.textContent = "Halo, Kia!";
        setTimeout(() => {
            window.location.href = "kia.html"; 
        }, 2000);
    } else if (input.toLowerCase() === "disya") {
        header.textContent = "Halo, Disya!";
        setTimeout(() => {
            window.location.href = "disya.html"; 
        }, 2000);
    } else if (input.toLowerCase() === "keisha") {
        header.textContent = "Halo, Keisha!";
        setTimeout(() => {
            window.location.href = "keisha.html"; 
        }, 2000);
    } else if (input.toLowerCase() === "seong gi-hun") {
        header.textContent = "Annyeonghaeseyo, Player 456.";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=tpSfLgCGpYM"; 
        }, 2000);

    } else if (input.toLowerCase() === "mikel") {
        header.textContent = "Halo, Mikel!";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=H09BzhLTEdo"; 
        }, 2000);

    } else {
         window.location.href = "https://youtu.be/42wfEs7oIP8?t=43";
    }
}