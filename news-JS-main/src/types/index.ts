interface Isourses {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
}

interface IArticle {
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

export { Iheadline, IArticle, Isourses, Inews };
