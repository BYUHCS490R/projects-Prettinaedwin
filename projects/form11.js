const form = document.getElementById("emotionalForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevents page reload

    // Collect form data (you can later send this via AJAX if needed)
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const stress = document.getElementById("stress").value;
    const goal = document.getElementById("goal").value;
    const updates = document.getElementById("updates").checked;

    // Display confirmation
    message.textContent = `Thank you, ${fullName}! Your goals have been submitted successfully.`;
    message.style.color = "green";

    // Optional: reset form
    form.reset();
    message.scrollIntoView({ behavior: "smooth" });
});
