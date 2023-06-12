interface Isourse {
    status?: string;
    sources?: [
        {
            id: string;
            name: string;
            description: string;
            url: string;
            category: string;
            language: string;
            country: string;
        }
    ];
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

export { Iheadline, IArticle, Isourse };
