import { ICode } from '../components/types';

const createCodeTemplate = (codeFragment: ICode) => {
    const { code } = codeFragment;
    return `${code}`;
};

export class CodeView {
    #code: ICode;
    constructor(code: ICode) {
        this.#code = code;
    }
    get render() {
        return createCodeTemplate(this.#code);
    }
}

export default CodeView;
