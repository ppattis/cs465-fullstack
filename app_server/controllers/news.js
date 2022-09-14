var fs = require('fs');

var latest_news = JSON.parse(fs.readFileSync('./data/latest_news.json', 'utf8'));
var vacation_tips = JSON.parse(fs.readFileSync('./data/vacation_tips.json', 'utf8'));
var news_items = JSON.parse(fs.readFileSync('./data/news_items.json', 'utf8'));

/* GET hompage */
const news = (req, res) => 
{

  res.render('news', { title: 'Travlr Getaways', latest_news , vacation_tips , news_items });

};

module.exports = 
{

  news

};