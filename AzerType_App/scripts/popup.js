const shareBtn = document.getElementById("share");
const shareSection = document.getElementById("popup");
const submitShare = document.getElementById("submit");

shareBtn.addEventListener("click", (e) => {
  shareSection.classList.add("active");
});

const removePopup = () => {
  submitShare.addEventListener("click", () => {
    shareSection.classList.remove("active");
  });
};
