module.exports = function (gulp, plg, cfg) {
  var bs = plg.browserSync.get('server')
  return function () {
    var processors = [
      plg.autoprefixer({
        browsers: [
          'last 5 versions',
          '> 1%',
          'ie 8',
        ]
      })
    ]
    gulp.src(cfg.src)
      .pipe(plg.sourcemaps.init())
      .pipe(plg.sass({
        outputStyle: 'compressed',
        includePaths: require('node-normalize-scss').includePaths
      }))
      .pipe(plg.postcss(processors))
      .pipe(plg.sourcemaps.write())
      .pipe(gulp.dest(cfg.dest))
      .pipe(bs.stream())
  }
}