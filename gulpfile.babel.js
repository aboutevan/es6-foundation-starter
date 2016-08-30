'use strict'

var gulp = require('gulp')
var babelify = require('babelify');
var browserify = require('browserify');
var pug = require('gulp-pug')
var plg = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'browser-sync', 'autoprefixer']
})
var config = require('./config.json')
var source = require('vinyl-source-stream');

gulp.task('bundle', function () {
	var bundler = browserify({
		entries: config.js.dest + '/main.js',
		debug: true
	});

	bundler.transform(babelify);

	bundler.bundle()
		.on('error', function (err) { console.error(err); })
		.pipe(source('app.js'))
		.pipe(plg.sourcemaps.write('./'))
		.pipe(gulp.dest(config.js.dest + '/babelify.js'))
})


// function getTask(task, cfg) {
//   if(!cfg) {
//     return require('./tasks/' + task)(gulp, plg)
//   } else {
//     return require('./tasks/' + task)(gulp, plg, cfg)
//   }
// }

function getTask(task, cfg) {
  return require('./tasks/' + task)(gulp, plg, cfg)
}
gulp.task('test', getTask('test', config.views))


gulp.task('serve', getTask('serve', config))

// Views
gulp.task('views', getTask('views', config.views))
/*Important - task performs as expected b/c of reload delay in serve task.
If you want to get rid of the delay, need to write the task in gulpfile
instead of modularizing*/
gulp.task('pug-rebuild', ['views'], getTask('pug-rebuild'))

// Scripts
gulp.task('scripts', ['lint'], getTask('scripts', config.js))
gulp.task('lint', getTask('lint', config.js))

//Styles
gulp.task('styles', ['sass-lint'], getTask('styles', config.styles))
gulp.task('sass-lint', getTask('sass-lint', config.styles))

gulp.task('watch', getTask('watch', config))


gulp.task('default', ['views', 'scripts', 'styles', 'serve', 'watch'])