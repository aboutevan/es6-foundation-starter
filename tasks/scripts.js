module.exports = function (gulp, plg, cfg) {

	return function () {
		const argv = plg.yargs.argv;
		gulp.src(cfg.src)
			.pipe(plg.if(argv.production === undefined, plg.sourcemaps.init()))
			.pipe(plg.jspm({
				selfExecutingBundle: argv.production ? true : false,
				minify: argv.production ? true : false,
			}))
			.pipe(plg.rename('main.js'))
			.pipe(plg.if(argv.production === undefined, plg.sourcemaps.write('.')))
			.pipe(gulp.dest(cfg.dest))
	}
};
