import { ILayout } from '../components/types';

const createLayoutTemplate = (layout: ILayout) => {
    const { title, code } = layout;

    return `<h2 class="game-header">${title}</h2>
    <div class="game-container">${code}</div>`;
};

export class LayoutView {
    #layout: ILayout;
    constructor(layout: ILayout) {
        this.#layout = layout;
    }
    get render() {
        return createLayoutTemplate(this.#layout);
    }
}

export default LayoutView;
