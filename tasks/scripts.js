module.exports = function (gulp, plg, cfg) {
	return function () {
		const argv = plg.yargs.argv;
		const options = {
			entries: cfg.src,
			debug: argv.production === false
		};

		return plg.browserify(options)
			.transform(plg.babelify)
			.bundle()
			.pipe(plg.vinylSourceStream('main.js'))
			.pipe(plg.if(argv.production, plg.vinylBuffer()))
			// .pipe(plg.if(argv.production, plg.sourcemaps.init({
			// 	loadMaps: true
			// })))
			.pipe(plg.if(argv.production, plg.uglify().on('error', plg.util.log)))
			// .pipe(plg.if(argv.production, plg.sourcemaps.write('./')))
			.pipe(gulp.dest(cfg.dest));
	};
};
