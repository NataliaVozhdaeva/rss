interface ITask {
    title?: string;
    rules?: string;
    examples?: string;
}

interface ICode {
    code?: string;
}

interface ILayout {
    title?: string;
    code?: string;
}

export { ITask, ICode, ILayout };
