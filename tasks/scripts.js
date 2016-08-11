module.exports = function (gulp, plg, cfg) {
  return function () {
    gulp.src(cfg.src)
      .pipe(plg.concat('main.js'))
      .pipe(gulp.dest(cfg.dest))
  }
}