var app = angular.module('headlessDemo',[]);
app.controller('myController', function($scope, $http) {
  $http.get('http://angular-d8.local:8080/jsonapi/node/article?page[limit]=5').success(function(response, status, headers, config) {
    $scope.articles = response.data;
    //console.log($scope.articles);
  }).
  error(function(data, status, headers, config) {
    // log error
  });

  // $scope.filteredTodos = []
  // ,$scope.currentPage = 1
  // ,$scope.numPerPage = 10
  // ,$scope.maxSize = 5;

  // $scope.makeTodos = function() {
  //   $scope.todos = [];
  //   for (i=1;i<=10;i++) {
  //     $scope.todos.push({ text:'todo '+i, done:false});
  //   }
  // };
  // $scope.makeTodos();

  // $scope.$watch('currentPage + numPerPage', function() {
  //   var begin = (($scope.currentPage - 1) * $scope.numPerPage)
  //   , end = begin + $scope.numPerPage;

  //   $scope.filteredTodos = $scope.todos.slice(begin, end);
  // });
});



