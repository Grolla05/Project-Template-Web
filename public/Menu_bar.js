document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const topicsList = document.querySelector(".topics");

  if (menuBtn && topicsList) {
    menuBtn.addEventListener("click", () => {
      topicsList.classList.toggle("show");
    });
  } else {
    console.error("Elementos '.menu-btn' ou '.topics' não encontrados no DOM.");
  }
});
