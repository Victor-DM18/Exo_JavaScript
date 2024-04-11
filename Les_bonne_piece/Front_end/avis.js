export const displayOpinionList = () => {
  const opinionList = document.querySelector(".opinion-list");
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

      for (let i = 0; i < opinion.length; i++) {
        newOpinion.innerHTML += `<p>Nom : ${opinion[i].utilisateur} <br> Commentaire : ${opinion[i].commentaire}</p> `;
      }

      opinionElement.appendChild(newOpinion);
    });
  }
};
