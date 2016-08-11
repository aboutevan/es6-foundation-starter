module.exports = function (gulp, plg, cfg) {
  return function () {
    console.log('msg')
    var path = require('path')

    var yo = gulp.src(cfg.data)
      .pipe(plg.data(function (file) {
        console.log(file)
        return require('../data/' + path.basename(file.path) + '.json')
      }))
  }
}