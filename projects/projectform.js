document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        age: document.getElementById("age").value.trim(),
        password: document.getElementById("password").value.trim(),
        about: document.getElementById("about").value.trim(),
        agree: document.getElementById("agree").checked,
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        country: document.getElementById("country").value
    };

    console.log("Form Data:", formData);

    if (!formData.name || !formData.email || !formData.gender) {
        alert("Please fill out Name, Email, and Gender.");
        return;
    }

    if (formData.age < 18) {
        alert("Age must be 18 or older.");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            
            const msgBox = document.getElementById("responseMessage");
            msgBox.style.display = "block";
            msgBox.textContent = response.message;

        
            document.getElementById("userForm").reset();
        }
    };

    xhr.send();
});
