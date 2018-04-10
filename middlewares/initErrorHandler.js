const initErrorHandler = app => {
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    app.use((req, res) => {
      res.redirect('/');
    });

    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    console.log(err);
    res.send('Houston we have a problem...');
  });
};

module.exports = initErrorHandler;
