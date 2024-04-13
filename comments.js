//Create web server
var express = require('express');
var app = express();
var fs = require('fs');

//Create server
var server = app.listen(8080, function() {
    console.log('Server is running...');
});

//Set the view engine
app.set('view engine', 'ejs');

//Set the path for the views
app.set('views', __dirname + '/views');

//Set the path for the static files
app.use(express.static(__dirname + '/public'));

//Read the file and render the comments
app.get('/comments', function(req, res) {
    fs.readFile(__dirname + '/data/comments.json', 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var obj = JSON.parse(data);
            res.render('comments', {comments: obj});
        }
    });
});