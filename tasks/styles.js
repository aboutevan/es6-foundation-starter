module.exports = function (gulp, plg, cfg) {
	return function () {
		// const argv = plg.yargs.argv;
		const bs = plg.browserSync.get('server');
		const processors = [
			plg.autoprefixer({
				browsers: [
					'last 5 versions',
					'> 1%',
					'ie 8'
				]
			})
		];
		gulp.src(cfg.src)
			.pipe(plg.sourcemaps.init())
			.pipe(plg.sass({
				outputStyle: 'expanded',
				functions: plg.sassJspmImporter.resolve_function('/'),
				importer: plg.sassJspmImporter.importer
			}))
			.pipe(plg.postcss(processors))
			.pipe(plg.sourcemaps.write('./'))
			.pipe(gulp.dest(cfg.dest))
			.pipe(bs.stream());
	};
};
