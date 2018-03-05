require("require-dir")("./gulp/tasks", { recurse: true });
var gulp = require("gulp");

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("renderHtml", "sass", "copy:fonts", "img"),
    "webpack"
  )
);
gulp.task(
  "dev",
  gulp.series(
    "clean",
    gulp.parallel("renderHtml", "sass", "copy:fonts", "img"),
    "webpack"
  )
);

gulp.task(
  "default",
  gulp.series("clean", "build", gulp.parallel("watch", "server"))
);
