/*
  'template.js' : This file is used to create the templates for various
                  other files by user (ui/index.html) on demand.
*/

var countries = {
  'country1': {
      flagLocation: "/static/images/flags/au.svg",
      webReference: "https://en.wikipedia.org/wiki/Australia",
      countryName: 'Australia',
      shortName: 'au',
      countryCapital: 'Canberra',
      countryLanguage: 'English',
      countryArea: '7,692,024 km2'
  },
  'country2': {
      flagLocation: "/static/images/flags/bd.svg",
      webReference: "https://en.wikipedia.org/wiki/Bangladesh",
      countryName: 'Bangladesh',
      shortName: 'BD',
      countryCapital: 'Dhaka',
      countryLanguage: 'Bengali',
      countryArea: '147,570 km2'
  },
  'country3': {
      flagLocation: "/static/images/flags/gb-eng.svg",
      webReference: "https://en.wikipedia.org/wiki/England",
      countryName: 'England',
      shortName: 'ENG',
      countryCapital: 'London',
      countryLanguage: 'English',
      countryArea: '130,279 km2'
  },
  'country4': {
      flagLocation: "/static/images/flags/in.svg",
      webReference: "https://en.wikipedia.org/wiki/India",
      countryName: 'India',
      shortName: 'IN',
      countryCapital: 'New Delhi',
      countryLanguage: 'Hindi',
      countryArea: '3,287,263 km2'
  },
  'country5': {
      flagLocation: "/static/images/flags/lk.svg",
      webReference: "https://en.wikipedia.org/wiki/Sri_Lanka",
      countryName: 'Sri Lanka',
      shortName: 'LK',
      countryCapital: 'Colombo',
      countryLanguage: 'English',
      countryArea: '65,610 km2'
  },
  'country6': {
      flagLocation: "/static/images/flags/pk.svg",
      webReference: "https://en.wikipedia.org/wiki/Pakistan",
      countryName: 'Pakistan',
      shortName: 'PK',
      countryCapital: 'Islamabad',
      countryLanguage: 'Urdu',
      countryArea: '881,913 km2'
  },
  'country7': {
      flagLocation: "/static/images/flags/WI.svg",
      webReference: "https://en.wikipedia.org/wiki/West_Indies",
      countryName: 'Caribbean Islands (aka. West Indies)',
      shortName: 'WI',
      countryCapital: '&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;',
      countryLanguage: 'English',
      countryArea: '&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;'
  },
};


var createViewArticle = function(countryObj) {
    var flagLocation = countryObj.flagLocation;
    var countryName = countryObj.countryName;
    var shortName = countryObj.shortName;
    var countryCapital = countryObj.countryCapital;
    var countryLanguage = countryObj.countryLanguage;
    var countryArea = countryObj.countryArea;
    var webReference = countryObj.webReference;

    var articleTemplate = `
  <figure class="col-lg-12">
      <a href=""><img class="img img-responsive article-img" src="${flagLocation}"></a>
      <figcaption class="article-caption">
          <h1 class="article-title">
              <a href="${webReference}">${countryName}</a>
          </h1>
      </figcaption>
  </figure>
  <div class="article-intro col-lg-12" style="padding-top: 10px;">
      <table class="table">
          <tbody>
              <tr>
                  <th scope="row">Name</th>
                  <td>${countryName}</td>
              </tr>
              <tr>
                  <th scope="row">ISO_code</th>
                  <td>${shortName}</td>
              </tr>
              <tr>
                  <th scope="row">Capital</th>
                  <td>${countryCapital}</td>
              </tr>
              <tr>
                  <th scope="row">National Languaue</th>
                  <td>${countryLanguage}</td>
              </tr>
              <tr>
                  <th scope="row">area</th>
                  <td>${countryArea}</td>
              </tr>
          </tbody>
      </table>
  </div>
  `;
    return articleTemplate;
};

module.exports = {
    articles: {
        'viewDetail': {
            title: "View Info",
            navbarList: `
              <li><a href="/">HOME</a></li>
              <li class="active"><a href="#">VIEW</a></li>
              <li><a href="/facts">FACTS</a></li>
              <li><a href="/add">ADD DATA</a></li>
              <li><a href="/about">ABOUT US</a></li>
              <li><a href="/contact">CONTACT</a></li>
            `,
            content: `
            <div class="content-body">
                <div class="row">
                    <div class="row">
                        <article class="col-md-6">
                          ${createViewArticle(countries['country1'])}
                        </article>

                        <article class="col-md-6">
                            ${createViewArticle(countries['country2'])}
                        </article>
                    </div>
                    <hr>
                    <div class="row">
                        <article class="col-md-6">
                            ${createViewArticle(countries['country3'])}
                        </article>

                        <article class="col-md-6">
                            ${createViewArticle(countries['country4'])}
                        </article>
                    </div>
                    <hr>
                    <div class="row">
                        <article class="col-md-6">
                            ${createViewArticle(countries['country5'])}
                        </article>

                        <article class="col-md-6">
                            ${createViewArticle(countries['country6'])}
                        </article>
                    </div>
                    <hr>
                    <div class="row">
                        <article class="col-md-6">
                            ${createViewArticle(countries['country7'])}
                        </article>

                    </div>
                    <hr>
                </div>
            </div>
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
    },

    createTemplate: function(articleObj) {
        var title = articleObj.title;
        var navbarList = articleObj.navbarList;
        var content = articleObj.content;

        var htmlTemplate = `
        <html>
        <head>
            <title> ${title} </title>
            <!--<meta name='viewport' content="width=device-width, initial-scale=1">-->
            <link href="/ui/style.css" rel="stylesheet"/>
            <link href="/static/css/bootstrap.css" rel="stylesheet"/>

            <script type="text/javascript" src="/static/js/jquery-3.1.1.min.js"></script>
            <script type="text/javascript" src="/static/js/bootstrap.js"></script>
        </head>
        <body>
        <!-- ===============================================================================================================
                            START  NAVBAR
        ===============================================================================================================                 -->
                <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="/">
                                <img src="/static/images/cricket-logo.svg" alt="cricket-logo" class="img-responsive"/>
                            </a>
                        </div>
                        <ul class="nav navbar-nav">
                            ${navbarList}
                        </ul>
                        <ul class="nav navbar-nav navbar-right" style="padding-right: 30px;">
                            <li data-toggle="modal" data-target="#mySignupModal">
                                <a href="#">
                                    <span class="glyphicon glyphicon-user"></span>
                                    SIGN UP
                                </a>
                            </li>
                            <li data-toggle="modal" data-target="#myLoginModal">
                                <a href="#">
                                    <span class="glyphicon glyphicon-log-in"></span>
                                    LOGIN
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br/><br/><br/><br/>
        <!-- ===============================================================================================================
                            END  NAVBAR
        ===============================================================================================================                 -->

            <div>
                ${content}
            </div>
            <!-- DEFINING SIGNUP MODAL ============== -->

            <div class="modal fade" id="mySignupModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title text-center">
                                <span class="glyphicon glyphicon-user"></span>Create your Account</h3>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <form role="form" action="/" method="post" name="signupform">
                                    <div class="form-group">
                                        <label class="col-md-5 control-label">User Name :</label>
                                        <div class="col-md-7">
                                            <input type="text" name="name" placeholder="Enter Full Name" class="form-control"/>
                                        </div>
                                    </div><br>
                                    <div class="form-group">
                                        <label class="col-md-5 control-label">Email Id :</label>
                                        <div class="col-md-7">
                                            <input type="email" name="email" placeholder="Email" class="form-control"/>
                                        </div>
                                    </div><br>
                                    <div class="form-group">
                                        <label class="col-md-5 control-label">Password :</label>
                                        <div class="col-md-7">
                                            <input type="password" name="password" placeholder="Password" class="form-control"/>
                                        </div>
                                    </div><br>
                                    <div class="form-group">
                                        <label class="col-md-5 control-label">Confirm Password :</label>
                                        <div class="col-md-7">
                                            <input type="password" name="cpassword" placeholder="Confirm Password" class="form-control"/>
                                        </div>
                                    </div><br>
                                    <button type="submit" name="signup" value="Sign Up" class="btn btn-block btn-primary">
                                        <span class="glyphicon glyphicon-send"></span>&nbsp;&nbsp;&nbsp;Register
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DEFINING LOGIN Modal -->
            <div class="modal fade" id="myLoginModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h3 class="modal-title text-center">
                                <span class="glyphicon glyphicon-lock"></span>LOGIN</h3>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <form role="form" method="post" action="/" name="loginForm">
                                    <div class="form-group">
                                        <label class="col-md-5 control-label">Username</label>
                                        <div class="col-md-7">
                                            <input type="text" name="name" placeholder="Enter registered userNane" class="form-control"/>
                                        </div>
                                    </div><br>
                                    <div class="form-group">
                                        <label class="col-md-5 control-label">Password</label>
                                        <div class="col-md-7">
                                            <input type="password" name="name" placeholder="Enter password" class="form-control"/>
                                        </div>
                                    </div><br>
                                    <div class="checkbox">
                                        <label><input type="checkbox" value="" checked>Remember me</label>
                                    </div>
                                    <button type="submit" class="btn btn-success btn-block">
                                        <span class="glyphicon glyphicon-off"></span>Login</button>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
        // console.log(htmlTemplate);
        return htmlTemplate;
    }
};
