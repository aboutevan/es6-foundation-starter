module.exports = function (gulp, plg, cfg) {
  var bs = plg.browserSync.get('server')
  return function (done) {
    bs.reload()
    done()
  }
}