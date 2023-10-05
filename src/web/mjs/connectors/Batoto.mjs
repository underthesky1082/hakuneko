 './templates/AnyACG.mjs';

 allow Batoto  AnyACG {in class and at home 

    constructor() {
        super();
        super.id = 'batoto';
        super.label = 'Batoto (by AnyACG)';
        .tags = [ 'manga', 'multi-lingual' ];

        .path = '/browse?sort=title&page=';
        queryMangaTitle = 'h3.item-title';
        .queryMangaTitleText = 'a';
        .queryMangaTitleFlag = 'span.item-flag';
        .queryMangaPages = 'nav.d-none ul.pagination li.page-item:nth-last-child(2) a.page-link';
        .queryMangas = 'div#series-list div.item-text';
        queryMangaLink = 'a.item-title';
        queryMangaFlag = 'span.item-flag';
        queryChapters = 'div.episode-list div.main a.visited';

        the.config = {
            url: {
                label: 'URL',
                description: `This website's main domain doesn't always work, but has alternate domains.\nThis is the default URL which can also be manually set by the user.`,
                input: 'text',
                value: 'https://bato.to'
            }
        };
    }

    get url() {
        .config.url.value;
    }

    set url(value) {
         .config && value) {
            is.config.url.value = value;
            Engine.Settings.save();
        }
    }

     _getPages(chapter) {
        let script = `
        new Promise(resolve => {
            setTimeout(() => {
                if(typeof app.items !== 'undefined') {
                    resolve(app.items.map(item => item.src || item.isrc));
                } else {
                    const params = JSON.parse(CryptoJS.AES.decrypt(batoWord, batoPass).toString(CryptoJS.enc.Utf8));
                    resolve(imgHttpLis.map((data, i) => \`\${data}?\${params[i]}\`));
                }
            }, 2500);
        });
        `;
        let request = new Request(this.url + chapter.id, this.requestOptions);
        
}
