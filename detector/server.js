var express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql');
var app = express();

//var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '1234',
//    database: 'error_detector'
//});

connection.connect();

var bookRouter = express.Router();
bookRouter.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

bookRouter.route('/Books')
.post(function (req, resp) {
    console.log("Into Books Post");
    var body = "";
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        console.log('body: ' + body);
        var jsonObj = JSON.parse(body);
        console.log(jsonObj);
    })
    resp.end(body);
})

.get(function (req, res) {
    var responseJson = { hello: "THis Is My API" };
    res.json(responseJson);

    //connection.query('SELECT * From students', function (err, rows, fields) {
    //    if (err) throw err;
    //    console.log('Students Are\n');
    //    res.json(rows);
    //    for (var i in rows) {
    //        var std = rows[i];
    //        console.log(std.Name + " and " + std.RollNo);
    //    }
    //});
});
app.use('/api', bookRouter);
app.get('/', function (req, res) {
    res.send('Welcome To My New API');
});

var http = require('http');
//.......
var onreq = function (req, res) {
    if (req.method == 'POST') {
        var body = '';
        var body = '';
        req.on('data', function (data) {
            body += data;
         //  if(body.length > 1e6) // FLOOD ATTACK OR FAULTY CLIENT, NUKE req
         //  {
         //       req.connection.destroy();
         //  }
        });
        req.on('end', function () {
            //console.log(body);
            
            //var projID;
            //var json = JSON.parse(body);
            //var query = 'SELECT id FROM project WHERE apiKey= \'' + json.apiKey + '\'';
            //var r = connection.query(query, function (err, rows, fields) {
            //    if (err) throw err;
            //    for (var i in rows) {
            //        json.project_id = rows[i].id;
            //        console.log(json);
            //        var que = connection.query("INSERT INTO error_metadata set ? ", json, function (err, rows) {
            //            if (err)
            //                console.log("Error inserting : %s ", err);
            //            res.end('Data Inserted\n');
                        
            //            connection.commit(function (err) {
            //                if (err) {
            //                    return connection.rollback(function () {
            //                        throw err;
            //                    });
            //                }
            //                console.log('success!');
            //            });
            //        });
            //    }
            //});
            //console.log(json);

            //function setVal(x) {
            //    projID = x;
            //    console("x = " + x);
            //    console("projID = " + projID);
            //}
            //console.log(r);
            //json.project_id = projID;
            //console.log(json);
            
            
            
            //var query = connection.query("INSERT INTO myerror set ? ", json, function (err, rows) {
            //    if (err)
            //        console.log("Error inserting : %s ", err);
            //    res.writeHead(200, { 'Content-Type': 'text/plain' });
            //    res.end('Hello World\n');
                
            //    connection.commit(function (err) {
            //        if (err) {
            //            return connection.rollback(function () {
            //                throw err;
            //            });
            //        }
            //        console.log('success!');
            //    });
            //});
            //connection.commit
            //// OK, works perfect!

        });
        //res.send("INto POST");
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World\n');

    }
    if (req.method == 'GET') {
        console.log("Into Get");
        res.end('Hello World\n');
        //connection.query('SELECT * From students', function (err, rows, fields) {
        //    if (err) throw err;
        //    console.log('Students Are\n');
        //    console.log(rows);
        //    //res.json(rows);
        //    //for (var i in rows) {
        //    //    var std = rows[i];
        //    //    console.log(std.Name + " and " + std.RollNo);
        //    //}
        //});
    }
   //......
}
//......
// server start

var port = process.env.PORT || 3000;
var server = http.createServer(onreq).listen(port);






//app.listen(port, function () {
//    console.log('Gulp Is Listing Running On port ' + port);
//});

