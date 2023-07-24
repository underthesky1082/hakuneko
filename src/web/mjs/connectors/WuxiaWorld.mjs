import WordPressMadaraNovel from './templates/WordPressMadaraNovel.mjs';

export default class WuxiaWorld extends WordPressMadaraNovel {

    constructor() {
        super();
        super.id = 'wuxiaworld';
        super.label = 'WuxiaWorld';
        this.tags = [ 'webtoon', 'novel', 'english' ];
        this.url = 'https://wuxiaworld.site';
    }

    _createMangaRequest(page) {
        return new Request(new URL(`/page/${page}/`, this.url), this.requestOptions);
    }
}
