(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router'
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider',  function($stateProvider, $urlRouterProvider, $httpProvider){
        	$urlRouterProvider.otherwise('main');
            
            //Create state for each page
        	$stateProvider.state('main', { url: '/main', templateUrl: 'app/templates/main.html', controller: 'MainController as main'})
        				  .state('projects', { url:'/projects', templateUrl: 'app/templates/projects.html', controller: 'ProjectController as project'})
                          .state('projects.mortgagecalc', { url:'/mortcalc', templateUrl:'app/templates/mortcalc.html', controller:'MortgageController as mort'})
                          .state('projects.changecalc', {url:'/changecalc', templateUrl:'app/templates/changecalc.html', controller:'ChangeController as change'})
                          .state('projects.weather', {url:'/weather', templateUrl:'app/templates/weather.html', controller:'WeatherController as weather'})
                          .state('projects.todo', {url:'/todos', templateUrl:'app/templates/todo.html', controller:'ToDoController as todo'});
        				  
        }]);
        
})();