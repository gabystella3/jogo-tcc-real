let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

const palavrasCorretas = [
  "exceção",
  "exceção",
  "paralisado",
  "paralisado",
  "licença",
  "licença",
  "cansaço",
  "cansaço",
  "cansaço",
];

const palavrasIncorretas = [
  "excessão",
  "excessão",
  "paralizado",
  "paralizado",
  "licensa",
  "licensa",
  "cançaço",
  "cançaço",
  "cançaço",
];

window.onload = function() {
    setGame();
}

function setGame() {
    // Configurar o tabuleiro no HTML
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);

    // Definir uma palavra correta aleatória na toupeira
    let palavraCorreta = document.createElement("div");
    palavraCorreta.innerHTML = "<strong><span style='color: white; text-shadow: 0 0 5px white;'>"
      + palavrasCorretas[Math.floor(Math.random() * palavrasCorretas.length)] + "</span></strong>";
    currMoleTile.appendChild(palavraCorreta);
}

function setPlant() {
    if (gameOver) {
        return;
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);

    // Definir uma palavra incorreta aleatória na planta
    let palavraIncorreta = document.createElement("div");
    palavraIncorreta.innerHTML = "<strong><span style='color: white; text-shadow: 0 0 5px white;'>"
      + palavrasIncorretas[Math.floor(Math.random() * palavrasIncorretas.length)] + "</span></strong>";
    currPlantTile.appendChild(palavraIncorreta);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "FIM DE JOGO: " + score.toString();
        gameOver = true;
    }
}


