const {
  showHomepage,
  showAboutPage,
} = require('../controllers/IndexController');
module.exports = (app) => {
  app.get('/', showHomepage);
  app.get('/about', showAboutPage);
};
