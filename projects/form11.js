const form = document.getElementById("emotionalForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    message.textContent = "Thank you! Your goals have been submitted successfully. Keep believing in yourself!";
    message.style.color = "green";

    form.reset();
    message.scrollIntoView({ behavior: "smooth" });
});
