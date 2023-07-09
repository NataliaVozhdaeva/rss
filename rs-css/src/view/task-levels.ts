import { ITask } from '../components/types';

const createTaskTemplate = (task: ITask) => {
    const { title, rules, examples } = task;

    return `<h2>${title}</h2>
  <p class="rules">${rules}</p> 
  <h3>Examples</h3>
  <p>${examples}</p>`;
};

export class TaskView {
    #task: ITask;
    constructor(task: ITask) {
        this.#task = task;
    }
    get render() {
        return createTaskTemplate(this.#task);
    }
}

export default TaskView;
