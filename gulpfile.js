const gulp   = require('gulp');
const stylus = require('gulp-stylus');


gulp.task('default', ['stylus', 'stylus-watch']);

gulp.task('stylus', () => 
    gulp.src('./app/css/stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./app/css/'))
);

gulp.task('stylus-watch', () => 
	gulp.watch('./app/css/stylus/**/**/*.styl', ['stylus'])
);
