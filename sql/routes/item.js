var express = require('express');
var router = express.Router();
var mysql= require('mysql'); //引用模块
var connection = mysql.createPool({//创建链接
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
    var id2=req.body.ipt2;
    var id3=req.body.ipt3;
    var text=req.body.text;
    var val=req.body.val;
    res.header('Access-Control-Allow-Origin','*');//跨域
    connection.query(`INSERT INTO baby.uid(title,time,concent,uid) VALUES('${id2}',now(),'${text}',${val})`, function(err, rows, fields) {
        res.send(rows);

    });
});

router.get('/data', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');//跨域
    connection.query('SELECT * FROM baby.uid', function(err, rows, fields) {
        res.send(rows);
        console.log(rows)
    });
});
module.exports = router;
