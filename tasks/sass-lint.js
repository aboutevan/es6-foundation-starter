module.exports = function (gulp, plg, cfg) {
	function handleError (err) {
		console.log(err.toString());
		this.emit('end');
	}

	return function () {
		gulp.src(cfg.watch)
			// sass lint
			.pipe(plg.sassLint({
				configFile: '.sass-lint.yml'
			}))
			.pipe(plg.sassLint.format())
			.pipe(plg.sassLint.failOnError())
			.on('error', handleError);
	};
};
