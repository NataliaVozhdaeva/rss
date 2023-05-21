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
body.appendChild(main);
main.appendChild(gameContainer);
const timerBtn = document.createElement('div');
timerBtn.className = 'btn game-top_btn timer';
timerBtn.textContent = '00:00';

const resetBtn = document.createElement('button');
resetBtn.className = 'btn game-top_btn restart';
const amountBtn = document.createElement('div');
amountBtn.className = 'btn game-top_btn amount';
gameContainer.appendChild(gameTop);
gameTop.appendChild(amountBtn);
gameTop.appendChild(resetBtn);
gameTop.appendChild(timerBtn);

let nutsCount = 10;
let width = 10;
let height = 10;

const flagsWatcher = document.createElement('div');
amountBtn.appendChild(flagsWatcher);

const clickWatcher = document.createElement('div');
gameInfo.prepend(clickWatcher);

const gamePref = document.createElement('div');
gamePref.className = 'game-pref';
let fieldSize = ['EASY', 'MEDIUM', 'HARD'];
gameInfo.prepend(gamePref);

const gameSizeLabel = document.createElement('label');
gameSizeLabel.textContent = 'Сложность игры';
const gameSize = document.createElement('select');
gameSize.className = 'btn size-pref';
gamePref.append(gameSizeLabel);
gamePref.append(gameSize);
fieldSize.forEach((el) => {
  let option = document.createElement('option');
  option.textContent = el;
  gameSize.appendChild(option);
});

const nutsRange = document.createElement('input');
nutsRange.setAttribute('type', 'range');
nutsRange.setAttribute('min', '10');
nutsRange.setAttribute('max', '99');
nutsRange.setAttribute('value', '10');
nutsRange.className = 'range';
const nutsRangeLabel = document.createElement('label');
nutsRangeLabel.textContent = 'Количество орешков';
gamePref.append(nutsRangeLabel);
gamePref.append(nutsRange);
const nutsRangeValue = document.createElement('span');
nutsRangeValue.textContent = nutsRange.value;
gamePref.append(nutsRangeValue);

nutsRange.addEventListener('input', (e) => {
  nutsRangeValue.textContent = e.target.value;
});

let submitPref = document.createElement('button');
submitPref.className = 'btn submit-pref';
submitPref.textContent = 'Изменить сложность';
gamePref.append(submitPref);
/* 
const difficulty = document.createElement('div');
difficulty.className = 'difficulty';
gamePref.append(difficulty); */

gameSize.onchange = () => {
  if (gameSize.value == 'EASY') {
    nutsRange.value = 10;
  } else if (gameSize.value == 'MEDIUM') {
    nutsRange.value = 45;
  } else {
    nutsRange.value = 99;
  }

  nutsRangeValue.textContent = nutsRange.value;
};

difficultyHandler = () => {
  document.querySelector('.game-field').remove();
  gameMsg.textContent = '';

  if (gameSize.value == 'EASY') {
    width = 10;
    height = 10;
  } else if (gameSize.value == 'MEDIUM') {
    width = 15;
    height = 15;
  } else {
    width = 25;
    height = 25;
  }

  nutsCount = nutsRange.value;
  timerBtn.textContent = '00:00';

  createGameField(width, height, nutsCount);
};

submitPref.addEventListener('click', difficultyHandler);

let t;

const createGameField = (width, height, nutsCount) => {
  /*   if (width == 10) {
    difficulty.textContent = 'game difficulty: EASY';
  } else if (width == 15) {
    difficulty.textContent = 'game difficulty: MEDIUM';
  } else {
    difficulty.textContent = 'game difficulty: HARD';
  } */

  clearTimeout(t);
  let sec = 0;
  let min = 0;

  function tick() {
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min > 99) {
        min = 0;
        return;
      }
    }
  }
  function add() {
    tick();
    timerBtn.textContent = (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
    timer();
  }
  function timer() {
    t = setTimeout(add, 1000);
  }

  let clickCounter = 0;
  clickWatcher.textContent = `clicks: ${clickCounter}`;
  const gameField = document.createElement('div');
  gameField.className = 'game-field';
  gameContainer.appendChild(gameField);

  const cellsCount = width * height;
  let closedCell = cellsCount;

  let flagsCount = nutsCount;
  flagsWatcher.textContent = `flags: ${flagsCount}`;
  const nuts = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5).slice(0, nutsCount);

  for (let i = 0; i < cellsCount; i++) {
    const gameCell = document.createElement('button');
    gameCell.className = 'game-cell';
    if (nuts.includes(i)) {
      gameCell.classList.add('nut');
    }
    if (width == 25) {
      gameCell.style.width = '18px';
      gameCell.style.height = '18px';
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
      clearTimeout(t);
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
        clearTimeout(t);
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
    if (e.target.classList.contains('marked')) {
      e.target.classList.remove('marked');
      flagsCount++;
      flagsWatcher.textContent = `flags: ${flagsCount}`;
    } else {
      e.target.classList.add('marked');
      flagsCount--;
      flagsWatcher.textContent = `flags: ${flagsCount}`;
    }
  });

  gameField.addEventListener('click', (e) => {
    if (clickCounter === 0) {
      timer();
    }

    if (e.target.classList.contains('marked')) {
      return;
    }
    const index = cells.indexOf(e.target);
    const col = index % width;
    const row = Math.floor(index / width);
    clickCounter++;
    clickWatcher.textContent = `clicks: ${clickCounter}`;
    openCell(row, col);
  });

  const isNut = (row, col) => {
    if (!isValid(row, col)) return false;
    const cellIndex = row * width + col;
    return nuts.includes(cellIndex);
  };
};

createGameField(width, height, nutsCount);

themeToggler.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    themeToggler.textContent = 'Темная тема';
  } else {
    body.classList.add('dark');
    themeToggler.textContent = 'Светлая тема';
  }
});

resetBtn.addEventListener('click', function () {
  document.querySelector('.game-field').remove();
  gameMsg.textContent = '';

  createGameField(width, height, nutsCount);
  timerBtn.textContent = '00:00';
});
