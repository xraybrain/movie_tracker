const { searchForMovie } = require('../controllers/APIController');
module.exports = (app) => {
  app.get('/api/moviesearch/', searchForMovie);
};
