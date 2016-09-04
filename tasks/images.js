module.exports = function (gulp, plg, cfg) {
	return function () {
		const bs = plg.browserSync.get('server');
		gulp.src(cfg.src)
		.pipe(plg.imagemin())
		.pipe(gulp.dest(cfg.dest))
		.pipe(bs.reload({
			stream: true,
			once: true
		}));
	};
};
