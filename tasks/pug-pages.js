module.exports = function (gulp, plg, cfg) {
  return function () {
    var path = require('path')

  	gulp.src(cfg.src.pages)
  		.pipe(plg.changed(cfg.dest.pages, {
  			extension: '.html'
  		}))
  		.pipe(plg.data(function (file) {
  		  return require('../data/' + path.basename(file.path) + '.json')
  		}))
  		.pipe(plg.pug())
  		.pipe(plg.rename({dirname: ''}))
  		.pipe(gulp.dest(cfg.dest.pages))
  }
}