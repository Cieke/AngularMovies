function MoviesAddController($log, $location) {
        this.newMovie = {
            movieName:''

        };
        this.addMovie = function () {
            var movieToAdd = {
                name: this.newMovie.movieName
            }

        $log.debug(movieToAdd);

        this.newMovie.movieName = '';
            $location.path('/search/movies-search.html')
} }

angular.module('movieApp').controller('movieAddCtrl', MoviesAddController)