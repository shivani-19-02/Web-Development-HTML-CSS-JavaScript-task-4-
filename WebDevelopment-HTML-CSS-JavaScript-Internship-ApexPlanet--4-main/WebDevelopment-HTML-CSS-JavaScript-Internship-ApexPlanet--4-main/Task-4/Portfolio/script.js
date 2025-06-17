// Highlight current nav item
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("#navMenu a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});