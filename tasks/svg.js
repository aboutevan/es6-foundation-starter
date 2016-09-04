module.exports = function (gulp, plg, cfg) {
	return function () {
		const bs = plg.browserSync.get('server');
		const spriteConfig = {
			mode: {
				symbol: {
					dest: '',
					sprite: 'all.svg'
				}
			}
		};
		gulp.src(cfg.src)
		.pipe(plg.svgmin())
		.pipe(plg.svgSprite(spriteConfig))
		.pipe(gulp.dest(cfg.dest))
		.pipe(bs.reload({
			stream: true,
			once: true
		}));
	};
};
