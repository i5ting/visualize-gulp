var gulp = require('gulp');

gulp.task('uglify_dep', function() {

});

gulp.task('uglify', ['uglify_dep'], function() {
  console.log("uglify")
});

gulp.task('default', ['uglify']);