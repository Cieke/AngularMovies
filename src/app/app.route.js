angular.module('movieApp')
    .config(function ($routeProvider) {
        $routeProvider.when('/search',{
            templateUrl:'app/movies/search/movies-search.html',
            controller:'movieSearchCtrl',
            controllerAs:'ctrl'

        });

        $routeProvider.when('/MyMovies', {
            templateUrl:'app/movies/myMovies/myMovies.html',
            controller:'myMoviesCtrl',
            controllerAs:'ctrl'
        });

        $routeProvider.when('/add', {
            templateUrl:'app/movies/add/movies-add.html',
            controller:'movieAddCtrl',
            controllerAs:'ctrl'
        });
        $routeProvider.when('/home',{
            templateUrl:'app/movies/welcome/welcome.html',
            controller:'welcomeCtrl',
            controllerAs:'ctrl'
        });


        $routeProvider.otherwise({
           redirectTo :'/home'
        });
    });