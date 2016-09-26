var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var atricles = {
    'articleOne': {
        title: "Article One | Roshan Kumar",
        heading: "Introduction to Object-Oriented JavaScript",
        date: "Sep 23, 2016",
        content: `
            <p>
                Object-oriented to the core, JavaScript features powerful, flexible OOP capabilities. This article starts with an introduction to object-oriented programming, then reviews the JavaScript object model, and finally demonstrates concepts of object-oriented programming in JavaScript. This article does not describe the newer syntax for object-oriented programming in ECMAScript 6.
            </p>
            <p>
                Read More on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript"> this </a> link.
            </p>
        `
    },
    'articleTwo': {
        title: "Article Two | Roshan Kumar",
        heading: "Working with objects",
        date: "Sep 24, 2016",
        content: `
            <p>
                Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.
            </p>
            <p>
                In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.
            </p>
            <p>
                Read More on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"> this </a> link.
            </p>
        `
    },
    'articleThree': {
        title: "Article Three | Roshan Kumar",
        heading: "Indexed collections in Java Script",
        date: "Sep 25, 2016",
        content: `
            <h4> Array Objects </h4>
            <p>
                An array is an ordered set of values that you refer to with a name and an index. For example, you could have an array called emp that contains employees' names indexed by their employee number. So emp[1] would be employee number one, emp[2] employee number two, and so on.
            </p>
            <p>
                JavaScript does not have an explicit array data type. However, you can use the predefined Array object and its methods to work with arrays in your applications. The Array object has methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. It has a property for determining the array length and other properties for use with regular expressions.
            </p>
            <p>
                Read More on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections"> this </a> link.
            </p>
        `
    }
};

var createTemplate = function (articleObj) {
    var title = articleObj.title;
    var heading = articleObj.heading;
    var date = articleObj.date;
    var content = articleObj.content;
    
    var htmlTemplate = `
        <head>
            <title> ${title} </title>
            <meta name='viewport' content="width=device-width, initial-scale=1"> 
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div>
                <a href="/"> HOME </a>
            </div>
            <hr/>
            <h3> ${heading} </h3>
            <div> 
                ${date}
            </div>
            <br>
            <div>
                ${content}
            </div>
        </body>
    `;
    
    return htmlTemplate;
};




app.get('/:articleName', function (req, res) {
    // ':articleName' will be evaluated as the path directory by express
    // Extract the name of the file from the URL :- provided by express
    var myPage = req.params.articleName;
    
    res.send(createTemplate(articles[myPage]));
    // 'articles[articleName]' will contain the attributes of articleObject
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
