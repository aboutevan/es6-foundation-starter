module.exports = function (gulp, plg, cfg) {
  return function () {
    gulp.src(cfg.src)
      .pipe(plg.concat('main.js'))
      // .pipe(plg.rename('concat.js'))
      .pipe(plg.uglify().on('error', plg.util.log))
      .pipe(gulp.dest(cfg.dest))
  }
}