document.getElementById("openMenu").addEventListener("click", () => {
  document.getElementById("sideMenu").classList.add("open");
});

document.getElementById("closeMenu").addEventListener("click", () => {
  document.getElementById("sideMenu").classList.remove("open");
});
