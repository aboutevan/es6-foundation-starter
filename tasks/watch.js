module.exports = function (gulp, plugins, cfg) {
  return function () {
    gulp.watch(cfg.styles.watch, ['styles'])
    gulp.watch(cfg.views.watch, ['pug-rebuild'])
    gulp.watch(cfg.js.watch, ['scripts2'])
  }
}