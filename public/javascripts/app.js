// var app = angular.module('headlessDemo',[]);

// //Controller for Homepage
// app.controller('mainController', function($scope, $http) {
//   $scope.data = {"head": "Welcome to our demo site.", "text": "Donec tincidunt massa nec justo sagittis, nec laoreet felis laoreet. In scelerisque metus vitae nisi luctus feugiat. Fusce eu augue a enim tempor luctus. Aliquam auctor id magna quis iaculis. Maecenas vitae felis porta, feugiat dolor condimentum, mattis tellus. Quisque in lectus eget lorem gravida tristique convallis non turpis. In hac habitasse platea dictumst. Phasellus vitae quam tellus. Phasellus maximus orci dui, et aliquet nulla porta in. Aliquam eu blandit metus."};
// });


// //Controller for Article page
// app.controller('articleController', function($scope, $http) {
//   $http.get('http://angular-d8.local:8080/rest/articles').success(function(response, status, headers, config) {
//     $scope.articles = response;
//   }).
//   error(function(data, status, headers, config) {
//     console.log("There is some error");
//   });
// });

var app = angular.module('headlessDemo', ['angularUtils.directives.dirPagination']);
app.controller('articleController', function(ArticleService, $scope, $http){
    var vm = this;
    vm.articles = []; //declare an empty array
    vm.pageno = 0; // initialize page no to 1
    vm.itemsPerPage = 5; //this could be a dynamic value from a drop down

    // vm.article_count = ArticleService.article_count;
    ArticleService.async().then(function(d) {
      vm.total_count = d;
    });

    vm.getData = function(pageno){
      //In practice this should be in a factory.
      vm.articles = [];
      $http.get("http://angular-d8.local:8080/articles-json/json?page=" + (pageno-1)).success(function(response, status, headers, config){
        vm.articles = response;  // data to be displayed on current page.
      }).
      error(function(data, status, headers, config) {
        console.log('Error');
      });
    };
    vm.getData(vm.pageno); // Call the function to fetch initial data on page load.
});

app.factory('ArticleService', function($http) {
  var ArticleService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('http://angular-d8.local:8080/articles-json/json/count').then(function (response) {
        // The then function here is an opportunity to modify the response
        // console.log(response.data.length);
        // The return value gets picked up by the then in the controller.
        return response.data.length;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return ArticleService;
});
