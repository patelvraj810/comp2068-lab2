'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res)
{
    console.log(req.query);
    function calculate(method, x, y)
    {
        if (method === "add")
        {
            console.log(x + " + " + y + " = " + (parseInt(x) + parseInt(y)));
        }
        else if (method === "subtract") {
            console.log(x + " - " + y + " = " + (parseInt(x) - parseInt(y)));
        }
        else if (method === "multiply") {
            console.log(x + " * " + y + " = " + (parseInt(x) * parseInt(y)));
        }
        else if (method === "devide") {
            console.log(x + " * " + y + " = " + (parseInt(x) / parseInt(y)));
        } else {
            console.log("Error Please enter ADD,subtract,multiply,devide only ");
        }
    }
    if (req.query.method != "") {
        calculate(req.query.method, req.query.x, req.query.y);
    }
    res.render('index', { title: 'My Calculater' });
});

module.exports = router;
