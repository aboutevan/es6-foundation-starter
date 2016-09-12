module.exports = function (gulp, plg, cfg) {
  return function () {
    var path = require('path')
    var bs = plg.browserSync.get('server')

    gulp.src(cfg.src.components, {base: './'})
    	.pipe(plg.changed(cfg.dest.components, {
    		extension: '.html'
    	}))
      .pipe(plg.pug())
      .pipe(gulp.dest(cfg.dest.components))
  }
}