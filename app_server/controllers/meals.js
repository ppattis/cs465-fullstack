var fs = require('fs');

var meal_options = JSON.parse(fs.readFileSync('./data/meal_options.json', 'utf8'));

/* GET hompage */
const meals = (req, res) => 
{

  res.render('meals', { title: 'Travlr Getaways', meal_options });

};

module.exports = 
{

  meals

};