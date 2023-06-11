import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'b97804de4e364338a2223a3c5cc78432',
        });
    }
}

export default AppLoader;
