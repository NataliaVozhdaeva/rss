import { CodeView } from '../../view/code-levels';
import { LayoutView } from '../../view/layot-levels';
import { TaskView } from '../../view/task-levels';
import { answears, tasks, codes, layouts } from '../const';

export default class Game {
    levels = document.querySelectorAll<HTMLElement>('.level-item');
    currentLevel = 0;
    taskComponents: object[] = tasks;
    taskContainer;
    task = '';
    codeComponents: object[] = codes;
    htmlEditor;
    layout;
    layoutComponents: object[] = layouts;
    input;
    okBtn;
    answearsArr: string[] = answears;

    constructor() {
        this.taskContainer = document.querySelector<HTMLElement>('.task');
        this.htmlEditor = document.querySelector<HTMLElement>('.html-view');
        this.layout = document.querySelector<HTMLElement>('.game-part');

        this.input = document.querySelector<HTMLInputElement>('.input');
        this.okBtn = document.querySelector<HTMLElement>('.btn');

        this.okBtn?.addEventListener('click', (): void => this.checkAnswear());
        document.addEventListener('keyup', (event): void => {
            if (event.code === 'Enter') {
                this.checkAnswear();
            }
        });

        this.levels.forEach((el): void =>
            el.addEventListener('click', (e): void => {
                this.changeLevel(e);
            })
        );
    }

    init(currentLevel: number): void {
        if (!this.htmlEditor || !this.layout || !this.taskContainer) throw TypeError;
        this.levels[this.currentLevel].classList.add('current');
        this.layout.innerHTML = new LayoutView(this.layoutComponents[currentLevel]).render;
        this.htmlEditor.innerHTML = new CodeView(this.codeComponents[currentLevel]).render;
        this.taskContainer.innerHTML = new TaskView(this.taskComponents[currentLevel]).render;
        this.interactivity();
    }

    checkAnswear(): void {
        this.input = document.querySelector<HTMLInputElement>('.input');

        if (!this.input || !this.layout) throw TypeError;

        if (
            this.input.value === this.answearsArr[this.currentLevel] ||
            this.answearsArr[this.currentLevel].includes(this.input.value)
        ) {
            this.input.value = '';
            this.layout.querySelectorAll('.el').forEach((element): void => element.classList.add('disappear'));
            this.levels[this.currentLevel].classList.remove('current');
            this.levels[this.currentLevel].classList.add('done');
            this.currentLevel += 1;
            this.levels[this.currentLevel].classList.add('current');

            setTimeout(() => {
                if (!this.htmlEditor || !this.layout || !this.taskContainer) throw TypeError;

                this.htmlEditor.innerHTML = '';
                this.layout.innerHTML = '';
                this.taskContainer.innerHTML = '';
                this.init(this.currentLevel);
            }, 1500);
        } else {
            this.layout.querySelectorAll('.el').forEach((element): void => element.classList.add('shake'));
            this.input.value = '';
            setTimeout(() => {
                if (!this.layout) throw TypeError;
                this.layout.querySelectorAll('.el').forEach((element): void => element.classList.remove('shake'));
            }, 1500);
        }
    }

    changeLevel(e: Event): void {
        if (!e.target) throw TypeError;
        const levelName = e.target as HTMLButtonElement;
        this.levels[this.currentLevel].classList.remove('current');
        this.currentLevel = Number(levelName.dataset.num);
        this.init(this.currentLevel);
    }

    interactivity(): void {
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
}
