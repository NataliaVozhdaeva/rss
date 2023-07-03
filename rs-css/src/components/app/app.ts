import { answears } from '../const';

const el = document.querySelectorAll<HTMLElement>('.el');
const tag = document.querySelectorAll<HTMLElement>('.tag');

export function interactivity(): void {
    el?.forEach((element, index): void => {
        element.addEventListener('mouseenter', (): void => {
            tag[index].classList.add('hover');
        });

        element.addEventListener('mouseleave', (): void => {
            tag[index].classList.remove('hover');
        });
    });

    tag.forEach((element, index): void => {
        element.addEventListener('mouseenter', (): void => {
            el[index].classList.add('hover');
        });

        element.addEventListener('mouseleave', (): void => {
            el[index].classList.remove('hover');
        });
    });
}

const okBtn = document.querySelector<HTMLElement>('.btn');
okBtn?.addEventListener('click', checkAnswear);

function checkAnswear(): void {
    const input = document.querySelector<HTMLInputElement>('.input');
    if (!input) throw TypeError;

    if (input.value === answears[0]) {
        input.value = '';
        el.forEach((element) => element.classList.add('disappear'));
    } else {
        el.forEach((element) => element.classList.add('shake'));
    }
}

export default { interactivity, checkAnswear };
