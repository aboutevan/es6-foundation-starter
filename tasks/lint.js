module.exports = function (gulp, plg, cfg) {
  return function () {
    gulp.src([cfg.src])
      .pipe(plg.xo())
  }
}