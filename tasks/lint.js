module.exports = function (gulp, plg, cfg) {
	function handleError (err) {
		console.log(err.toString());
		this.emit('end');
	}
	return function () {
		gulp.src(cfg.watch)
		.pipe(plg.xo())
		.on('error', handleError);
	};
};
