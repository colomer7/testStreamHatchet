var appTest = angular.module('appTest', []);

function mainController($scope, $http) {
	$scope.formData = {};
	
	 $scope.games = [
        "League of legends",
		"Counter-Strike: Global Offensive",
		"PLAYERUNKNOWN'S BATTLEGROUNDS",
		"Overwatch",
		"Dota 2"
    ];
	
	// when landing on the page, get all streams
	$http.get('/api/streams')
		.then(function(response)  {
			$scope.streamers = response.data.streams;
		});
		
	$scope.filterStreams = function() {
		$http({
			url: '/api/filter', 
			method: "GET",
			params: {game: $scope.selectedGame}
		}).then(function(response)  {
			$scope.streamers = response.data.streams;
		});
    };
	
}
