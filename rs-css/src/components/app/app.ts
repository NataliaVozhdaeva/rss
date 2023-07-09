//import { answears } from '../const';
import { CodeView } from '../../view/code-levels';
import { LayoutView } from '../../view/layot-levels';
import { TaskView } from '../../view/task-levels';
import { tasks, codes, layouts } from '../const';

export default class Game {
    levels = document.querySelectorAll<HTMLElement>('.level-item');
    currentLevel = 0;
    taskComponents: object[] = tasks;
    taskContainer;
    taskContent = this.taskComponents[this.currentLevel];
    task = '';
    codeComponents: object[] = codes;
    htmlEditor;
    htmlContent = this.codeComponents[this.currentLevel];
    layout;
    layoutComponents: object[] = layouts;
    layoutContent = this.layoutComponents[this.currentLevel];

    constructor() {
        this.taskContainer = document.querySelector<HTMLElement>('.task');
        this.htmlEditor = document.querySelector<HTMLElement>('.html-view');
        this.layout = document.querySelector<HTMLElement>('.game-part');
    }

    init(): void {
        this.levels[this.currentLevel].classList.add('current');

        if (!this.htmlEditor || !this.layout || !this.taskContainer) throw TypeError;
        console.log(this.layoutContent);
        console.log(this.taskContent);

        this.layout.innerHTML = new LayoutView(this.layoutContent).render;
        this.htmlEditor.innerHTML = new CodeView(this.htmlContent).render;
        this.taskContainer.innerHTML = new TaskView(this.taskContent).render;
    }
}
/*
let currentLevel = 0;
const level = document.querySelector<HTMLElement>('.level');
const levels = document.querySelectorAll<HTMLElement>('.level-item');

level?.addEventListener('click', (e): void => {
    if (!e.target) throw TypeError;
    const levelName = e.target as HTMLButtonElement;
    currentLevel = Number(levelName.dataset.num);
    init(currentLevel);
    interactivity();
});

export function init(currentLevel: number): void {
    const htmlEditor = document.querySelector<HTMLElement>('.html-view');
    const taskContainer = document.querySelector<HTMLElement>('.task');
    const layout = document.querySelector<HTMLElement>('.game-part');
    levels[currentLevel].classList.add('current');

    if (!htmlEditor || !layout || !taskContainer) throw TypeError;

    htmlEditor.innerHTML = codeComponents[currentLevel];
    layout.innerHTML = layioutComponents[currentLevel];
     taskContainer.innerHTML = taskComponents[currentLevel];
}

export function interactivity(): void {
    const el = document.querySelectorAll<HTMLElement>('.el');
    const tag = document.querySelectorAll<HTMLElement>('.tag');
    el?.forEach((element, index): void => {
        element.addEventListener('mouseenter', (): void => {
            tag[index].classList.add('hover');

            const popup: HTMLElement = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = tag[index].textContent;
            element.append(popup);
        });

        element.addEventListener('mouseleave', (): void => {
            tag[index].classList.remove('hover');
            document.querySelector('.popup')?.remove();
        });
    });

    tag.forEach((element, index): void => {
        element.addEventListener('mouseenter', (): void => {
            el[index].classList.add('hover');

            const popup: HTMLElement = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = tag[index].textContent;
            el[index].append(popup);
        });

        element.addEventListener('mouseleave', (): void => {
            el[index].classList.remove('hover');
            document.querySelector('.popup')?.remove();
        });
    });
}

const okBtn = document.querySelector<HTMLElement>('.btn');
okBtn?.addEventListener('click', checkAnswear);
document.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        checkAnswear();
    }
});

function checkAnswear(): void {
    const el = document.querySelectorAll<HTMLElement>('.el');
    const input = document.querySelector<HTMLInputElement>('.input');
    const htmlEditor = document.querySelector<HTMLElement>('.html-view');
    const layout = document.querySelector<HTMLElement>('.game-part');
    const task = document.querySelector<HTMLElement>('.task');

    if (!input) throw TypeError;

    if (
        input.value === answears[currentLevel] ||
        input.value === answears[currentLevel][0] ||
        input.value === answears[currentLevel][1]
    ) {
        input.value = '';
        el.forEach((element) => element.classList.add('disappear'));
        levels[currentLevel].classList.remove('current');
        levels[currentLevel].classList.add('done');
        currentLevel += 1;
        levels[currentLevel].classList.add('current');

        if (!htmlEditor || !layout || !task) throw TypeError;
        setTimeout(() => {
            htmlEditor.innerHTML = '';
            layout.innerHTML = '';
            task.innerHTML = '';
            init(currentLevel);
            interactivity();
        }, 1500);
    } else {
        el.forEach((element) => {
            element.classList.add('shake');
            input.value = '';
            setTimeout(() => {
                element.classList.remove('shake');
            }, 1500);
        });
    }
} */
