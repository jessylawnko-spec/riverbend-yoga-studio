const classOptions = [
    "Gentle Yoga",
    "Vinyasa Yoga",
    "Restorative Yoga"
];

function saveClassPreference() {
    const classPreference = document.getElementById("classPreference").value;
    const message = document.getElementById("preferenceMessage");

    if (classOptions.includes(classPreference)) {
        localStorage.setItem("savedClassPreference", classPreference);
        message.textContent = "Your class preference has been saved: " + classPreference;
    } else {
        message.textContent = "Please select a class first.";
    }
}

function loadClassPreference() {
    const savedPreference = localStorage.getItem("savedClassPreference");

    if (savedPreference) {
        document.getElementById("classPreference").value = savedPreference;
        document.getElementById("preferenceMessage").textContent =
            "Your saved class preference is: " + savedPreference;
    }
}

document.getElementById("savePreference").addEventListener("click", saveClassPreference);

loadClassPreference();
const form = document.querySelector("form");

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    nameError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (!email.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (isValid) {
        alert("Your request has been submitted!");
        form.reset();
    }
}

form.addEventListener("submit", validateForm);