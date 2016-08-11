module.exports = function (gulp, plg, cfg) {
  return function () {
    var path = require('path')
    var bs = plg.browserSync.get('server')

    gulp.src(cfg.src)
      .pipe(plg.data(function (file) {
        return require('../data/' + path.basename(file.path) + '.json')
      }))
      .pipe(plg.pug())
      .pipe(gulp.dest(cfg.dest))
  }
}