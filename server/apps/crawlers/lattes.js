//
import puppeteer from 'puppeteer';

export default {

    removeUnwanted: function (str, arr) {
        /*
        * Function to remove array of substrings from a single string
        * 
        * inputs:
        *   str: String
        *   arr: Array
        * 
        * outputs:
        *   str: String
        * 
        * output content description:
        *   'string' variable filtered based on inuted array of substring
        */

        // loop through array of substrings
        for (var i = 0; i < arr.length; i++) {
            str = str.replace(arr[i], '');
        }

        // return
        return str;
    },

    cleanObjects: function (obj) {
        /*
        * Function to remove keys that contains null as value
        * 
        * inputs:
        *   obj: Object
        * 
        * outputs:
        *   obj: Object
        * 
        * output content desciption:
        *   {Object} variable without keys that contains null as value
        */

        // loop thought object
        for (var propName in obj) { 
            if (obj[propName] === null || obj[propName] === undefined) {
                delete obj[propName];
            }
        }

        // return
        return obj;
    },

    filterAcademicHtml: function (academicWrapper) {
        /*
        * Function for clean data obtained from academic crawler request
        *
        * inputs:
        *   academicWrapper: String
        * 
        * outputs:
        *   cleanAcademics: Array
        * 
        * output content desctiption:
        *   cleanAcademics: [
        *       0: Obejct,
        *       1: Object,
        *       ...
        *       N: Object
        *   ]
        */

        //
        let unwanted_re = [
            /<a name="FormacaoAcademicaTitulacao" tabindex="\d\d">/g,
            /<h1 tabindex="0">Formação acadêmica\/titulação<\/h1><\/a>/g,
            /<div class="layout-cell layout-cell-12 data-cell"><\/div>/g,
            /<div class="layout-cell layout-cell-12 data-cell">/g,
            /<div class="layout-cell layout-cell-3 text-align-right">/g,
            /<div class="layout-cell-pad-5 text-align-right">/g,
            /<div class="layout-cell layout-cell-9">/g,
            /<div class="layout-cell-pad-5">/g,
            /<hr class="separator">/g
        ];

        //
        let unwanted_str = [
            '</div></div></div><',
            'div></div>',
            '</div><',
            'Título:',
            'Orientador:',
            'Grande área:',
            'Grande Área:',
            'Área:',
            'Ano de Obtenção:'
        ]

        // remove regex matches from string
        let cleanAcademics = this.removeUnwanted(academicWrapper, unwanted_re);

        // split into diffetent academic items
        cleanAcademics = cleanAcademics.split(/<b>(?=\d\d\d\d?)/g);

        // clean each academic item
        cleanAcademics = cleanAcademics.map(el => {

            // look for matches of year
            var year = el.match(/\d\d\d\d\s-\s\d\d\d\d|^\d\d\d\d/);
            // get degree raw info
            var degree = el.match(/div>(.*).\s<br\sclass="clear">/);
            // get other academic parameters
            var academic = el.match(/.\s<br\sclass="clear">(.*).</);

            // bypass match object
            year = (year != null ? year[0] : null)
            // filter after data content
            degree = (degree != null ? degree[0].split('<br class="clear">')[0] : null),
            // split suplemental data
            academic = (academic != null ? academic[0].split('<br class="clear">') : null);

            // define basic variables
            var institution, thesis, advisor, areas;

            // check for existing suplemental data
            if (academic != null) {
                // retrieve institution name
                institution = (academic[1] != null ? academic[1] : null);
                // retrieve thesis title
                thesis = (academic[2] != null && academic[2].match('Título') ? academic[2] : null);
                // retrieve advisor name
                advisor = (academic[3] != null && academic[3].match('Orientador') ? academic[3] : null);
                // check for existing fields of work
                if (academic[4] || academic[5] || academic[5]) {
                    areas = [
                        (academic[4] != null && academic[4].match('Grande') 
                            ? this.removeUnwanted(academic[4], unwanted_str).trim() : null
                        ),
                        (academic[5] != null && academic[5].match('Grande') 
                            ? this.removeUnwanted(academic[5], unwanted_str).trim() : null
                        ),
                        (academic[6] != null && academic[6].match('Grande') 
                            ? this.removeUnwanted(academic[5], unwanted_str).trim() : null
                        )
                    ]
                }
            }

            /* 
            * set response object structure
            * trim whitespaces
            * remove unwanted substrings
            * check for null values before writing data
            */
            var academicObject = {
                'year': (year != null ? year.trim() : null),
                'degree': (degree != null ? this.removeUnwanted(degree, unwanted_str).trim() : null),
                'institution': (institution != null ? this.removeUnwanted(institution, unwanted_str).trim() : null),
                'thesis': (thesis != null ? this.removeUnwanted(thesis, unwanted_str).trim() : null),
                'advisor': (advisor != null ? this.removeUnwanted(advisor, unwanted_str).trim() : null),
                'areas': (areas != null ? areas : null)
            }

            // remove keys with null values
            academicObject = this.cleanObjects(academicObject);
            // return if no item is null
            return (year && degree && academic ? academicObject : null);
        })

        // remove null items from response array
        return cleanAcademics.filter(function (el) {
            return el != null;
        });
    },
    
    getUser: async function (id) {
        /*
        * This a lattes platform cralwer
        *
        * inputs:
        *   id: Integer
        * 
        * outputs:
        *   data: Object
        *  
        * output content description:
        *   data: {
        *       "nome": "<user profile name",
        *       "Nome em citações bibliográficas": "<formatted name for academic pappers>"
        *       "academic": "<a pure html formatted content with user academic history>"
        *   }
        */

        // launch an instance of browser
        const browser = await puppeteer.launch({ headless: true });

        // create a new blank page instance
        const page = await browser.newPage()

        // set new page url direction
        await page.goto('http://lattes.cnpq.br/'+id);

        // create data object
        const data = {};

        /*
        * Get wrapper for identification without line breaks and tabs
        * Remove empty strings from array
        * save user name in data object
        * split reference names into array and save in data object
        */
        const wrapperID = await page.$$eval('.title-wrapper', anchors => { 
            return anchors[1].textContent;
        });
        const clearID = wrapperID.split('\n').filter(el => el !== '');
        clearID.splice(0,1);
        data['name'] = clearID[1];
        data['references'] = clearID[3].split(';');

        /*
        * Get academic wrapper without line breaks and tabs
        * Sabe the pure inner html value to data object
        */
        const academicWrapper = await page.$$eval('.title-wrapper', anchors => {
            return anchors[3].innerHTML.replace(/(?:\r\n|\r|\n|\t)/g,'');
        });
        const cleanAcademics = this.filterAcademicHtml(academicWrapper);
        data['academics'] = cleanAcademics;

        // wait until browser is done
        await browser.close()

        // return data object
        return data;
    }
}

