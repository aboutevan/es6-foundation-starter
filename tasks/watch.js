module.exports = function (gulp, plugins, cfg) {
  return function () {
    gulp.watch(cfg.styles.watch, ['styles']);
    gulp.watch(cfg.views.watch, ['scripts', 'pug-rebuild']);
    gulp.watch(cfg.js.watch, ['scripts']);
    gulp.watch(cfg.images.src, ['images']);
    gulp.watch(cfg.svg.src, ['svg']);
  }
}