'use strict';

var prestamosApp = angular.module('prestamosApp', ['ngRoute']);

prestamosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'vistas/formularioPrincipal.html',
        controller: 'formIngresoControllers'      
      }).
      when('vitas/solicitarPrestamo', {
          templateUrl: 'vistas/solicitarPrestamo.html',
          controller: 'formSolicPrestamoCtrl'
        }).
        otherwise({
            redirectTo: '/index'
          });
  }]);
