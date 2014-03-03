var projectsApp = angular.module('ProjectsApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.router']);

projectsApp.config(function($routeProvider) {

  $routeProvider.
      when('/useradd',{
          controller: 'UseraddController',
          templateUrl: 'html/useradd.html'
      }).
      when('/tasklist',{
          controller: 'TaskListController',
          templateUrl: 'html/tasklist.html'
      }).
      when('/project',{
          controller: 'ProjectController',
          templateUrl: 'html/project.html'
      }).
      when('/config',{
          controller: 'ConfigController',
          templateUrl: 'html/config.html'
      });
});

projectsApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('config.user', {
                url: '/user',
                controller: 'UserController',
                templateUrl: 'html/user.html'
            })
//            .state('useradd', {
//                url: '/useradd',
//                controller: 'UseraddController',
//                templateUrl: 'html/useradd.html'
//            })
            .state('tasklist', {
                url: '/tasklist',
                controller: 'TaskListController',
                templateUrl: 'html/tasklist.html'
            })
            .state('project', {
                url: '/project',
                controller: 'ProjectController',
                templateUrl: 'html/project.html'
            })
            .state('config', {
                url: '/config',
                controller: 'ConfigController',
                templateUrl: 'html/config.html'
            })
});