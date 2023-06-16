import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'b97804de4e364338a2223a3c5cc78432',
        });
    }
}

export default AppLoader;
