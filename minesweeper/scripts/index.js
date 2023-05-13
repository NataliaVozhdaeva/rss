const createGameField = (width, height, nutsCount) => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  main.className = 'main';
  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  const gameTop = document.createElement('div');
  gameTop.className = 'game-top';
  const gameField = document.createElement('div');
  gameField.className = 'game-field';
  const timerBtn = document.createElement('button');
  timerBtn.className = 'game-top_btn timer';
  const resetBtn = document.createElement('button');
  resetBtn.className = 'game-top_btn restart';
  const amountBtn = document.createElement('button');
  amountBtn.className = 'game-top_btn amount';

  const cellsCount = width * height;

  body.appendChild(main);
  main.appendChild(gameContainer);

  gameContainer.appendChild(gameTop);
  gameContainer.appendChild(gameField);

  gameTop.appendChild(amountBtn);
  gameTop.appendChild(resetBtn);
  gameTop.appendChild(timerBtn);

  for (let i = 0; i < cellsCount; i++) {
    const gameCell = document.createElement('button');
    gameCell.className = 'game-cell';
    gameField.appendChild(gameCell);
  }

  const cells = [...gameField.children];
  const nuts = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, nutsCount);
  console.log(nuts);

  gameField.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.target.classList.contains('marked') ? e.target.classList.remove('marked') : e.target.classList.add('marked');
  });

  gameField.addEventListener('click', (e) => {
    if (e.target.classList.contains('marked')) {
      return;
    }
    e.target.classList.add('opened');
    const index = cells.indexOf(e.target);
    const col = index % width;
    const row = Math.floor(index / width);
    if (isNut(row, col)) {
      e.target.classList.add('nut');
    }
  });

  const isNut = (row, col) => {
    const cellIndex = row * width + col;
    return nuts.includes(cellIndex);
  };
};

createGameField(10, 10, 10);
