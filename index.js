// require all packages
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

// set port
const PORT = 8000

// call express
const app = express()

// set url
//const url = 'https://www.theguardian.com/uk'
const url = 'https://boards.greenhouse.io/rubiconmd'
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.opening', html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            if (title.includes("Remote")) {
            articles.push({
                title, url
            })
        }
        })
        console.log(articles)
    }).catch(err => console.log(err))


// set app to listen to port PORT
app.listen(PORT, () => console.log('server running on PORT', PORT))
