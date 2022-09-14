var fs = require('fs');

var room_info = JSON.parse(fs.readFileSync('./data/room_info.json', 'utf8'));

/* GET hompage */
const rooms = (req, res) => 
{

  res.render('rooms', { title: 'Travlr Getaways', room_info });

};

module.exports = 
{

  rooms

};