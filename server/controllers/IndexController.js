exports.showHomepage = (req, res, next) => {
  res.render('index', {
    pageTitle: 'Movie Tracker',
  });
};

exports.showAboutPage = (req, res, next) => {
  res.render('about', {
    pageTitle: 'About Movie Tracker',
  });
};
