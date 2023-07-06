function layuotFor1(): string {
    return `<h2 class="game-header">Choose cats!</h2>
    <div class="game-container"><div class="el"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat active" src="./assets/img/black.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>`;
}

function layuotFor2(): string {
    return `<h2 class="game-header">Choose the one gray cat!</h2>
    <div class="game-container"><div class="el"><img class="cat" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat" src="./assets/img/black.png" alt="" width="auto" height="200px"></div>
  <div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>`;
}

function layuotFor3(): string {
    return `<h2 class="game-header">Choose a ginger cat and a cushion!</h2>
  <div class="game-container"><div class="el"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
<div class="el"><img class="cat active" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div>
<div class="el"><img class="cat" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>`;
}

function layuotFor4(): string {
    return `<h2 class="game-header">Choose a cat with green eyes!</h2>
<div class="game-container"><div class="el"><img class="cat" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
<div class="el"><img class="cat" src="./assets/img/black.png" alt="" width="auto" height="200px"></div>
<div class="el"><img class="cat active" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div></div>`;
}

function layuotFor5(): string {
    return `<h2 class="game-header">Choose a cat on a cushion!</h2>
    <div class="game-container">
    <div class="el out">
      <div class="el in"><img class="cat active" src="./assets/img/ginger.png" alt="" width="auto" height="200px"></div>
      <img class="cat" src="./assets/img/cushion.png" alt="" width="auto" height="200px">
    </div>
    <div class="el"><img class="cat" src="./assets/img/cushion.png" alt="" width="auto" height="200px"></div>
    <div class="el"><img class="cat" src="./assets/img/gray.png" alt="" width="auto" height="200px"></div>
  </div>`;
}

export { layuotFor1, layuotFor2, layuotFor3, layuotFor4, layuotFor5 };
