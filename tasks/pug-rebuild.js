module.exports = function (gulp, plg) {
	const bs = plg.browserSync.get('server');
	return function (done) {
		bs.reload();
		done();
	};
};
