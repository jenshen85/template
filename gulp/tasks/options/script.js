var gulp = require("gulp"),
  gulpIf = require("gulp-if"),
  sourcemaps = require("gulp-sourcemaps"),
  babel = require("gulp-babel"),
  concat = require("gulp-concat"),
  config = require("../../config"),
  rename = require("gulp-rename");

gulp.task("scripts", function () {
  return gulp.src(config.src + "/common/*.js")
    .pipe(gulpIf(config.dev, sourcemaps.init()))
    .pipe(babel())
    .pipe(gulpIf(!config.dev, concat("index.bundle.js")))
    .pipe(gulpIf(!config.dev, rename({ suffix: '.min' })))
    .pipe(gulpIf(config.dev, sourcemaps.write("./")))
    .pipe(gulp.dest(config.dest + "/js/"));
});
