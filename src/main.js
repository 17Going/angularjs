import angular from 'angular';

const app = angular.module('app', []);

app.controller('appControl', ($scope)=>{
    $scope.name = 'luozhidan'
})


angular.bootstrap(document.getElementById('root'), ['app']);