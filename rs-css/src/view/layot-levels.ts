function layuotFor1(): string {
    return `<h2 class="game-header">Choose cats!</h2>
    <div class="game-container"><div class="el"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat active" src="./assets/img/black.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div>`;
}

function layuotFor2(): string {
    return `<h2 class="game-header">Choose one cat!</h2>
    <div class="game-container"><div class="el"><img class="cat" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat" src="./assets/img/black.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div>`;
}

export { layuotFor1, layuotFor2 };
