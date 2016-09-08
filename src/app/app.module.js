var appModule = angular.module('movieApp',['ngRoute']);

appModule.config(function (appVersion) {
    console.log('app config ' +appVersion);
});
appModule.run(function () {
    console.log('app run');
});



appModule.constant('apiUrl', 'https://angularcoursebackend.azurewebsites.net/api/Movies');

appModule.constant('appVersion','0.2.0');