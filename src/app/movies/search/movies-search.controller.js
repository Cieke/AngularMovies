function MovieSearchController($http, apiUrl) {

    this.title='Search Movies';

    var that = this;
    this.movies =[];

    function getMovies() {
        $http.get(apiUrl ).then(function(res){


            that.movies = res.data;

        });
    }



    getMovies();







}

angular.module('movieApp').controller('movieSearchCtrl', MovieSearchController)