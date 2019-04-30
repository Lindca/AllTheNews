var db = require('../models');
var cheerio = require('cheerio');

module.exports = function (app) {
  app.get("/", function (req, res) {

    db.Article.find({}).then(function (results) {
      console.log(results);
      res.render('index', { article: results });
    }).catch(function (err) {
      res.send("An error occurred").render('index');
    });

  });
}