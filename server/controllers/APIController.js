const { MovieDb } = require('moviedb-promise');
const moviedb = new MovieDb('a5e1067cd76cc2dc41f63cc56c1e1705');

exports.searchForMovie = async (req, res, next) => {
  try {
    let results = (await moviedb.searchMovie({ query: req.query.searchtext }))
      .results;

    results = results
      .filter((data) => data.poster_path !== null)
      .map((data) => {
        data.poster_path = `https://image.tmdb.org/t/p/w500` + data.poster_path;
        return data;
      });
    //const images = await moviedb.genreMovieList();
    console.log(results);
    res.json({ error: null, results });
  } catch (e) {
    console.log(e);
    res.json({ error: null, message: 'operation failed' });
  }
};
