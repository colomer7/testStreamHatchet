var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};
	
	 $scope.games = [
        "League of legends",
		"Counter-Strike: Global Offensive",
		"PLAYERUNKNOWN'S BATTLEGROUNDS",
		"Overwatch"
    ];
	
	// when landing on the page, get all todos and show them
	$http.get('/api/streams')
		.then(function(response)  {
			$scope.streamers = response.data.streams;
		});

	/*)
	// when submitting the add form, send the text to the node API
	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a todo after checking it
	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
	*/
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
