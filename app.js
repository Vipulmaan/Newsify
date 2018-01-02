    /**
 * Created by vipul on 05/12/2017.
 */
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const ejs  = require('ejs');

app.set('view engine' , 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const GoogleNewsRss = require('google-news-rss');

const googleNews = new GoogleNewsRss();

app.get('/',function(req, res){

     googleNews
         .search('apple')
         .then(function(resp){
            console.log('rendering->'+resp[0].title)
            res.render('index',{'data':resp});
         });

});

app.post('/search',  function(req , res) {

    var x = req.body.user.name;
    googleNews
        .search(x)
        .then(function(resp){
            console.log('rendering->'+resp[0].title)
            res.render('index',{'data':resp});
        });
});

app.listen(3000, () => console.log('port 3000'))

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................

//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
//line...................
