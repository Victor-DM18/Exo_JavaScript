export const displayOpinionList = () => {
  const pieceElement = document.querySelectorAll(".fiches article button");
  for (let i = 0; i < pieceElement.length; i++) {
    pieceElement[i].addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      const res = await fetch(`http://localhost:8081/pieces/${id}/avis`);
      const opinion = await res.json();
      console.log(opinion);

      const opinionElement = e.target.parentElement;

      const newOpinion = document.createElement("p");
      newOpinion.classList.add("opinion-list");

      if (document.querySelector(".opinion-list")) {
        document.querySelector(".opinion-list").remove();
      } else {
        for (let i = 0; i < opinion.length; i++) {
          newOpinion.innerHTML += `<p>Nom : ${opinion[i].utilisateur} <br> Commentaire : ${opinion[i].commentaire}</p> `;
        }

        opinionElement.appendChild(newOpinion);
      }
    });
  }
};

export const addOpinion = () => {
  const formOpinion = document.querySelector(".formulaire-avis");
  formOpinion.addEventListener("submit", (e) => {
    e.preventDefault();
    const opinion = {
      pieceId: parseInt(e.target.querySelector("[name=piece-id]").value),
      utilisateur: e.target.querySelector("[name=utilisateur]").value,
      commentaire: e.target.querySelector("[name=commentaire]").value,
    };
    const payload = JSON.stringify(opinion);

    fetch("http://localhost:8081/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
  });
};
