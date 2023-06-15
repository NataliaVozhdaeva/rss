interface Isource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
}

interface IsourceArr {
    status: string;
    sources: Isource[];
}

interface IArticle {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface Iheadline {
    status: string;
    totalResults: number;
    articles: [
        {
            source: {
                id: string;
                name: string;
            };
            author: string;
            title: string;
            description: string;
            url: string;
            urlToImage: string;
            publishedAt: string;
            content: string;
        }
    ];
}

interface Inews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

interface InewsArr {
    articles: IArticle[];
    status: string;
    totalResults: number;
}

interface IOptions {
    [key: string]: string;
}

enum Endpoints {
    Sources = 'sources',
    Everything = 'everything',
}

export { Iheadline, IArticle, Isource, Inews, IsourceArr, InewsArr, IOptions, Endpoints };
