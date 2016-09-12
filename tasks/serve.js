module.exports = function (gulp, plg, cfg) {
	const bs = plg.browserSync.create('server');
	return function () {
		bs.init({
			server: {
				baseDir: cfg.server.baseDir,
				routes: {
					'/jspm-packages': 'jspm_packages',
					'/config.js': 'config.js',
					'/dev' : 'dev'
				}
			},
			notify: false,
			reloadDelay: 500,
			open: false
		});
	};
};
