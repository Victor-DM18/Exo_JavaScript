const shareBtn = document.getElementById("share");
const shareSection = document.getElementById("popup");

shareBtn.addEventListener("click", (e) => {
  shareSection.classList.add("active");
});
