'use strict';

function sampleCtrl($http, $scope) {
	$scope.jsonurl = '../response.json'
    //greeting and welcome msg
$http.get($scope.jsonurl).then(function(response) {
	$scope.items = response.data;
})
}


app.controller('sampleCtrl', ['$http', '$scope', sampleCtrl])