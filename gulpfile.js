var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(gulpCallback) {
  browserSync.init({
    // serve out of app/
    server: './',
    // launch default browser as soon as server is up
    open: true
  }, function callback() {
    // (server is now up)

    // set up watch to reload browsers when source changes
    gulp.watch(['*.html', 'js/**/*.js', 'img/**/*.png', 'img/**/*.jpg'], browserSync.reload);

    // watch css and stream to BrowserSync when it changes
    gulp.watch('css/*.css', function() {
      // grab css files and send them into browserSync.stream
      // this injects the css into the page
      gulp.src('css/*.css')
        .pipe(browserSync.stream());
    });    

    // notify gulp that this task is done
    gulpCallback();
  });
});