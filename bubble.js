const containerBubble = document.querySelector(".modal");
const inputBubble = document.getElementById("fname");

containerBubble.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (inputBubble.value === "mango") {
            if (window.location.href.endsWith("index.html")) {
                window.location = window.location.href.replace(
                    "index.html",
                    "uop.html"
                );
            }
        }
    }
});