// static/js/main.js
document.addEventListener("DOMContentLoaded", function () {
  // Add any JavaScript functionality needed
  console.log("Secure Care application loaded");

  // Example: Confirm before deleting
  const deleteButtons = document.querySelectorAll(".btn-danger");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (!confirm("Are you sure you want to delete this item?")) {
        e.preventDefault();
      }
    });
  });
});
