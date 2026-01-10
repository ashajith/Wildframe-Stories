const form = document.getElementById("contactForm");
const dateInput = document.getElementById("dateInput");

/* Prevent past dates */
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!dateInput.value) {
    alert("Please select a valid date.");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});
