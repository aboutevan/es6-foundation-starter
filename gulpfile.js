'use strict'

var gulp = require('gulp')
var pug = require('gulp-pug')
var plg = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'browser-sync', 'autoprefixer']
})
var config = require('./config.json')

gulp.task('vendor', function () {
  return gulp.src([
      // Foundation Core - needed for any of the components below
      config.foundationJS.src + 'core.js',
      config.foundationJS.src + 'util.*.js',

      config.foundationJS.src + 'accordion.js',
      config.foundationJS.src + 'accordionMenu.js',
      // config.foundationJS.src + 'drilldown.js',
      // config.foundationJS.src + 'dropdown.js',
      // config.foundationJS.src + 'dropdownMenu.js',
      // config.foundationJS.src + 'equalizer.js',
      // config.foundationJS.src + 'interchange.js',
      // config.foundationJS.src + 'magellan.js',
      // config.foundationJS.src + 'offcanvas.js',
      // config.foundationJS.src + 'orbit.js',
      // config.foundationJS.src + 'responsiveMenu.js',
      // config.foundationJS.src + 'responsiveToggle.js',
      // config.foundationJS.src + 'reveal.js',
      // config.foundationJS.src + 'slider.js',
      // config.foundationJS.src + 'sticky.js',
      // config.foundationJS.src + 'tabs.js',
      // config.foundationJS.src + 'toggler.js',
      // config.foundationJS.src + 'tooltip.js'
    ])
    // .pipe(plg.sourcemaps.init())
    //concat here
    .pipe(plg.concat('concat.js'))
    // .pipe(gulp.dest(config.foundationJS.dest))
    // .pipe(plg.uglify().on('error', plg.util.log))
    // .pipe(plg.sourcemaps.write('./'))
    .pipe(gulp.dest(config.foundationJS.dest))
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
gulp.task('scripts', getTask('scripts', config.js))
gulp.task('lint', getTask('lint', config.js))

//Styles
gulp.task('styles', ['sass-lint'], getTask('styles', config.styles))
gulp.task('sass-lint', getTask('sass-lint', config.styles))

gulp.task('watch', getTask('watch', config))


gulp.task('default', ['views', 'scripts', 'styles', 'serve', 'watch'])