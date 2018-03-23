var webpack = require('webpack')
var webpackConfig_dev = require('./build/webpack.dev')
var gulp = require("gulp");

gulp.task("gulp-dev-js", function (callback) {
    webpack(webpackConfig_dev).watch(200, function (err, stats) {
        if (err) throw err
        process.stdout.write(
            stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            })
        )
        callback();
    })
});


gulp.task('watch', function (done) {
    gulp.watch('src/**/*', ['gulp-dev-js'])
        .on('end', done);
});

gulp.task('dev', ['gulp-dev-js', 'watch']);