const body = document.querySelector('body');
const main = document.createElement('main');
main.className = 'main';
const greeting = document.createElement('div');
greeting.className = 'greeting';
greeting.textContent =
  'Добро пожаловать в команду лесничих! Белочки, как известно, регулярно запасают провизию в тайниках. Ваше первое задание - найти на карте (игровом поле) все тайники, чтобы случайно не разорить их.';
main.appendChild(greeting);
const gameInfo = document.createElement('div');
gameInfo.className = 'game-info';
main.appendChild(gameInfo);
const gameMsg = document.createElement('p');
gameInfo.prepend(gameMsg);
themeToggler = document.createElement('button');
themeToggler.className = 'btn theme-btn';
themeToggler.textContent = 'Темная тема';
gameInfo.appendChild(themeToggler);
const gameContainer = document.createElement('div');
gameContainer.className = 'game-container';
const gameTop = document.createElement('div');
gameTop.className = 'game-top';

const createGameField = (width, height, nutsCount) => {
  const gameField = document.createElement('div');
  gameField.className = 'game-field';
  const timerBtn = document.createElement('button');
  timerBtn.className = 'btn game-top_btn timer';
  const resetBtn = document.createElement('button');
  resetBtn.className = 'btn game-top_btn restart';
  const amountBtn = document.createElement('button');
  amountBtn.className = 'btn game-top_btn amount';

  const cellsCount = width * height;
  let closedCell = cellsCount;
  const nuts = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, nutsCount);

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
    if (nuts.includes(i)) {
      gameCell.classList.add('nut');
    }

    gameField.appendChild(gameCell);
  }

  const cellSize = getComputedStyle(document.querySelector('.game-cell')).width.slice(0, 2);
  gameField.style.width = cellSize * width + 'px';

  const cells = [...gameField.children];

  const openCell = (row, col) => {
    const index = row * width + col;
    const cell = cells[index];
    if (!isValid(row, col)) return;
    if (cell.classList.contains('opened')) return;

    cell.classList.add('opened');
    closedCell--;

    if (isNut(row, col)) {
      gameMsg.textContent =
        'Вам не нужно открывать тайник, нужно только обозначить место. Придется начинать стажировку сначала...';
      cell.classList.add('ruined');
      document.querySelectorAll('.nut').forEach((el) => el.classList.add('opened'));
      cells.forEach((el) => (el.disabled = true));
    } else {
      const count = getCount(row, col);
      if (count !== 0) {
        cell.textContent = getCount(row, col);
        switch (true) {
          case cell.textContent == 2:
            cell.classList.add('firebrick');
            break;
          case cell.textContent == 3:
            cell.classList.add('blue');
            break;
          case cell.textContent == 4:
            cell.classList.add('orange');
            break;
          case cell.textContent == 5:
            cell.classList.add('indigo');
            break;
          case cell.textContent == 6:
            cell.classList.add('cadetblue');
            break;
          case cell.textContent == 7:
            cell.classList.add('violet');
            break;
          case cell.textContent == 8:
            cell.classList.add('wheat');
            break;
          default:
            break;
        }
      } else {
        for (let c = -1; c <= 1; c++) {
          for (let r = -1; r <= 1; r++) {
            openCell(row + r, col + c);
          }
        }
      }
      if (closedCell <= nutsCount) {
        gameMsg.textContent = 'Вы нашли все белочкины тайники и повесили объявления. Поздравляем!';
        cells.forEach((el) => (el.disabled = true));
      }
    }
  };

  const getCount = (row, col) => {
    let count = 0;
    for (let c = -1; c <= 1; c++) {
      for (let r = -1; r <= 1; r++) {
        if (isNut(row + r, col + c)) {
          count++;
        }
      }
    }
    return count;
  };

  const isValid = (row, col) => {
    return row >= 0 && row < height && col >= 0 && col < width;
  };

  gameField.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('opened')) {
      return;
    }
    e.target.classList.contains('marked') ? e.target.classList.remove('marked') : e.target.classList.add('marked');
  });

  gameField.addEventListener('click', (e) => {
    if (e.target.classList.contains('marked')) {
      return;
    }
    const index = cells.indexOf(e.target);
    const col = index % width;
    const row = Math.floor(index / width);
    openCell(row, col);
  });

  const isNut = (row, col) => {
    if (!isValid(row, col)) return false;
    const cellIndex = row * width + col;
    return nuts.includes(cellIndex);
  };
};

createGameField(10, 10, 20);

themeToggler.addEventListener('click', () => {
  console.log('click');
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    themeToggler.textContent = 'Темная тема';
  } else {
    body.classList.add('dark');
    themeToggler.textContent = 'Светлая тема';
  }
});
