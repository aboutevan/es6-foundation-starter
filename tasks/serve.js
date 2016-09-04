module.exports = function (gulp, plg, cfg) {
	const bs = plg.browserSync.create('server');
	return function () {
		bs.init({
			server: cfg.server.baseDir,
			notify: false,
			reloadDelay: 1000
		});
	};
};
