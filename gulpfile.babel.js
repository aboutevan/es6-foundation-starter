'use strict';
import gulp from 'gulp';
import config from './config.json';

const plg = require('gulp-load-plugins')({
	// prefix any npm package with plg to use in external tasks
	pattern: [
		'gulp-*',
		'browser-sync',
		'autoprefixer',
		'sass-jspm-importer',
		'yargs']
});

function getTask (task, cfg) {
	return require('./tasks/' + task)(gulp, plg, cfg);
}


// Server
gulp.task('serve', getTask('serve', config));

// Views
gulp.task('pug-components', getTask('pug-components', config.views));
gulp.task('pug-pages', ['pug-components'], getTask('pug-pages', config.views));
/* Important - task performs as expected b/c of reload delay in serve task.
If you want to get rid of the delay, need to write the task in gulpfile
instead of modularizing */
gulp.task('pug-rebuild', ['pug-pages'], getTask('pug-rebuild'));

// Scripts
gulp.task('scripts', getTask('scripts', config.js));
gulp.task('lint', getTask('lint', config.js));

// Styles
gulp.task('styles', ['sass-lint'], getTask('styles', config.styles));
gulp.task('sass-lint', getTask('sass-lint', config.styles));

// Imgages
gulp.task('images', getTask('images', config.images));

// SVG
gulp.task('svg', getTask('svg', config.svg));

// Watch
gulp.task('watch', getTask('watch', config));

// One task to rule them all
gulp.task('default', ['pug-pages', 'scripts', 'styles', 'images', 'svg', 'serve', 'watch']);
