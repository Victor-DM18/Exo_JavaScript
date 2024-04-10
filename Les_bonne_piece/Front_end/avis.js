export const displayOpinionList = () => {
  const pieceElement = document.querySelectorAll(".fiches article button");
  for (let i = 0; i < pieceElement.length; i++) {
    pieceElement[i].addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      const res = await fetch(`http://localhost:8081/pieces/${id}/avis`);
      const opinion = await res.json();
      console.log(opinion);
    });
  }
};
