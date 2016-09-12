module.exports = function (gulp, plg, cfg) {
	return function () {
		gulp.src(cfg.src.components, {base: './'})
			.pipe(changed('', {extension: '.html'}))
	}
}