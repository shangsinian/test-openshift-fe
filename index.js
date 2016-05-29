var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var Service = require('./thriftService');
//port set
app.set('port', 8080);

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, './static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app start
app.listen(app.get('port'), function () {
    console.log("Listen on port: "+app.get('port'));
});

app.get('/', (req, res)=>{
    res.render('./index')
})

app.post('/api/cal', (req, res)=>{
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    Service.Cal.add(num1, num2, function(err, response) {
        res.status(200).send({result:response});
    })
   
    // response = num1 + num2
    // res.status(200).send({result:response});
})