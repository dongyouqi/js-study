var gulp = require('gulp');
// sass编译成css
var sass = require('gulp-sass');


// sass编译成css并加前缀
gulp.task('sass', function () {

    console.log('start sass to css');
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', sass.logError)
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function() {
    gulp.watch(['app/sass/**/*.scss'], ['sass']);
});
