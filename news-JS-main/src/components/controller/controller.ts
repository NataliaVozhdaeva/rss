import AppLoader from './appLoader';
import { InewsArr, IsourceArr, Endpoints } from '../../types/index';

type CallbackSourse = (data?: IsourceArr) => void;
type CallbackNews = (data?: InewsArr) => void;

class AppController extends AppLoader {
    public getSources(callback: CallbackSourse) {
        super.getResp(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: CallbackNews): void {
        let target = <HTMLElement>e.target;
        const newsContainer = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) throw TypeError;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
