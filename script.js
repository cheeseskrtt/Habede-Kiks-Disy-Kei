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
    } else {
         alert("who are you bruv");
    }}