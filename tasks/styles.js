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
      // sass lint
      .pipe(plg.sassLint({
        'config-file': '.sass-lint.yml'
      }))
      .pipe(plg.sassLint.format())
      .pipe(plg.sassLint.failOnError())
      .pipe(plg.sass({
        outputStyle: 'compressed',
        includePaths: require('node-normalize-scss').includePaths
      }))
      .on('error', plg.notify.onError())
      .pipe(plg.postcss(processors))
      .pipe(plg.sourcemaps.write())
      .pipe(gulp.dest(cfg.dest))
      .pipe(bs.stream())
  }
}