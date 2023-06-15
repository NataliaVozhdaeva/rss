import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sourses = document.querySelector<HTMLElement>('.sources');
        if (!sourses) throw TypeError;
        this.controller.getSources((data) => {
            if (!data) throw TypeError;
            this.view.drawSources(data);
        });
        sourses.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data) => {
                if (!data) throw TypeError;
                this.view.drawNews(data);
            })
        );
    }
}

export default App;
