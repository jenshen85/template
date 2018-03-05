var gulp   = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../../config');

// Static server
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: "dist/"
    },
    files: ["dist/*.html", "dist/assets/css/*.css", "dist/assets/js/*.js", "dist/assets/img/*.*"]
  });
});

module.exports = browserSync;
