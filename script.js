document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const sidebar = document.getElementById("sidebar");

  hamburgerMenu.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  // Close the sidebar when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !sidebar.contains(event.target) &&
      !hamburgerMenu.contains(event.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
});
const submit = document.querySelector("#kirim");
submit.addEventListener("click", (e) => {
  e.preventDefault();
});
