import AppLoader from './appLoader';

type callbackFunction = () => void;

class AppController extends AppLoader {
    getSources(callback: callbackFunction) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: callbackFunction) {
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
            //if (!target.parentNode) throw TypeError;
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
