// require all packages
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

// set port
const PORT = 8000

// call express
const app = express()

// set url
const url = "http://cs.wheatoncollege.edu/mgousie/comp212.html"
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('.card-content').each(function(){
            const title = $(this).find('h2').text()

            articles.push({
                title
            })
            
        })
        
        // print out array in console
        console.log(articles)
    }).catch(err => console.log(err))


// set app to listen to port PORT
app.listen(PORT, () => console.log('server running on PORT', PORT))
