'use strict';
import gulp from 'gulp';
import config from './config.json';

const plg = require('gulp-load-plugins')({
	pattern: [
		'gulp-*',
		'browser-sync',
		'autoprefixer',
		'babelify',
		'browserify',
		'yargs',
		'vinyl-buffer',
		'vinyl-source-stream']
});

function getTask (task, cfg) {
	return require('./tasks/' + task)(gulp, plg, cfg);
}
// Server
gulp.task('serve', getTask('serve', config));

// Views
gulp.task('views', getTask('views', config.views));
/* Important - task performs as expected b/c of reload delay in serve task.
If you want to get rid of the delay, need to write the task in gulpfile
instead of modularizing */
gulp.task('pug-rebuild', ['views'], getTask('pug-rebuild'));

// Scripts
gulp.task('scripts', ['lint'], getTask('scripts', config.js));
gulp.task('lint', getTask('lint', config.js));

// Styles
gulp.task('styles', ['sass-lint'], getTask('styles', config.styles));
gulp.task('sass-lint', getTask('sass-lint', config.styles));

// Imgages
gulp.task('images', getTask('images', config.images));

// SVG
gulp.task('svg', getTask('svg', config.svg));

gulp.task('watch', getTask('watch', config));

gulp.task('default', ['views', 'scripts', 'styles', 'images', 'svg', 'serve', 'watch']);
