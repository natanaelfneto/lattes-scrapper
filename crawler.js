const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://lattes.cnpq.br/6163208418747580')

    const wrappers = await page.$$eval('.title-wrapper', anchors => { 
        
        // var re = /\n|\r?\n|\r/g;
        var re = /(?:\r\n|\r|\n|\t)/g;

        return anchors.map(anchor => (
            anchor.textContent.replace(re, '')
        ));
    });

    const username = wrapper[1];

    console.log(username);

    await browser.close()
})()

