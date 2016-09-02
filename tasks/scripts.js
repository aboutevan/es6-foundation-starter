module.exports = function (gulp, plg, cfg) {
	
  return function () {gulp.src(cfg.src)
  		var argv = plg.yargs.argv;

      var options = {
      	entries: cfg.src,
      	debug: argv.production ? false : true
      }

      return plg.browserify(options)
      	.transform(plg.babelify)
      	.bundle()
      	.pipe(plg.vinylSourceStream('main.js'))
      	.pipe(plg.if(argv.production, plg.vinylBuffer()))
      	.pipe(plg.if(argv.production, plg.uglify().on('error', plg.util.log)))
      	.pipe(gulp.dest(cfg.dest))
  }
}