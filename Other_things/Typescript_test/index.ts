const txt: HTMLElement | any = document.getElementById("txt")

const list:string[] = [" un développeur", " un gamer", " un programmeur", " malin", " passionné", " curieux", " un sportif", " un clown", " gentil"]


const display = () => {
  let index: number = 0
  setInterval(() => {
    txt.textContent = list[index]
    index++
  }, 1000)
}

display()
    
  
