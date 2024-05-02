export const displayOpinionList = () => {
  const pieceElement = document.querySelectorAll(".fiches article button");
  for (let i = 0; i < pieceElement.length; i++) {
    pieceElement[i].addEventListener("click", async (e) => {
      const id = e.target.dataset.id;

      let opinion = window.localStorage.getItem(`avis-piece ${id}`);
      if (opinion === null) {
        const res = await fetch(`http://localhost:8081/pieces/${id}/avis`);
        opinion = await res.json();
        window.localStorage.setItem(
          `avis-piece ${id}`,
          JSON.stringify(opinion)
        );
      } else {
        opinion = JSON.parse(opinion);
      }
      const opinionElement = e.target.parentElement;

      if (document.querySelector(`.opinion-list-${id}`)) {
        document.querySelector(`.opinion-list-${id}`).remove();
      } else {
        const newOpinion = document.createElement("p");
        newOpinion.classList.add(`opinion-list-${id}`);
        displayOpinion(newOpinion, opinionElement, opinion);
      }
    });
  }
};

export const displayOpinion = (newOpinion, opinionElement, opinion) => {
  for (let i = 0; i < opinion.length; i++) {
    newOpinion.innerHTML += `<p>Nom : ${opinion[i].utilisateur} <br> Commentaire : ${opinion[i].commentaire}</p> `;
    opinionElement.appendChild(newOpinion);
  }
};

export const addOpinion = () => {
  const formOpinion = document.querySelector(".formulaire-avis");

  formOpinion.addEventListener("submit", (e) => {
    e.preventDefault();
    const opinion = {
      pieceId: parseInt(e.target.querySelector("[name=piece-id]").value),
      utilisateur: e.target.querySelector("[name=user]").value,
      commentaire: e.target.querySelector("[name=commentary]").value,
      nbEtoiles: e.target.querySelector("[name=nbStar]").value,
    };
    const payload = JSON.stringify(opinion);

    fetch("http://localhost:8081/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
  });
};

export const displayGraphOpinion = async () => {
  // Calcul du nombre total de commentaires par quantité d'étoiles attribuées
  const avis = await fetch("http://localhost:8081/avis").then((avis) =>
    avis.json()
  );

  const nb_commentaires = [0, 0, 0, 0, 0];
  for (let commentaire of avis) {
    nb_commentaires[commentaire.nbEtoiles - 1]++;
  }

  const labels = ["1", "2", "3", "4", "5"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Étoiles attribuées",
        data: nb_commentaires,
        backgroundColor: "rgba(255, 230, 0, 1)", // couleur jaune
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
    },
  };

  const graphiqueAvis = new Chart(
    document.querySelector("#graphique-avis"),
    config
  );

  const piecesJSON = window.localStorage.getItem("pieces");
  const pieces = JSON.parse(piecesJSON);

  let countDispo = 0;
  let countNotDispo = 0;

  for (let i = 0; i < avis.length; i++) {
    const piece = pieces.find((p) => p.id === avis[i].pieceId);
  }

  if (piece.disponibilite) {
    countDispo++;
  } else {
    countNotDispo;
  }
};
