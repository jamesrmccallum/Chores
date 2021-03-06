///<reference path="../all.d.ts"/>

module Chores {

  var app = angular.module('Chores', ['firebase', 'ngAnimate', 'ngTouch','ngRoute',,'ngCookies','angularModalService','ui.bootstrap'])
    .service('dateSvc', Chores.Services.dateSvc)
    .service('sessionStorageSvc',Chores.Services.sessionStorageSvc)
    .service('firebaseSvc', Chores.Services.firebaseSvc)
    .service('userProfileSvc',Chores.Services.userProfileSvc)
    .service('choresDataSvc', Chores.Services.choresDataSvc)
    .service('sessionSvc',Chores.Services.sessionSvc)
    .controller(Chores.Controllers)
    .directive(Chores.Directives);

  app.config(['$routeProvider','$locationProvider', ($routeProvider: ng.route.IRouteProvider,$locationProvider: ng.ILocationProvider) => {
    $routeProvider.
      when('/History', {
        templateUrl: 'Views/History.html',
        resolve: {}
      }).
      when('/Approve', {
        templateUrl: 'Views/Approval.html',
        resolve: {}
      }).
      when('/Settings', {
        templateUrl: 'Views/Settings.html',
        resolve: {}        
      }).
      when('/',{
        templateUrl: 'Views/Chorelist.html',
        resolve: {}
      }).
      otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  
  }]);
}