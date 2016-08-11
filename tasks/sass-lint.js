module.exports = function (gulp, plg, cfg) {
  gulp.src(cfg.src)
      // sass lint
      .pipe(plg.sassLint({
        'config-file': '.sass-lint.yml'
      }))
      .pipe(plg.sassLint.format())
      .pipe(plg.sassLint.failOnError())
}