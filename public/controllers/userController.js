angular.module('myApp').controller('userController', function(userService, $scope, $state) {


  
  $scope.addGoalData = function(username) {
    console.log("addGoalData " + username )
      userService.addGoalData(username)
      .then(function (response) {
              console.log("scope.addGoalData")
      })
      $scope.username = username;
      $state.go('login')
  }

  $scope.getUserData = function() {
      userService.login()
      .then(function (response) {
              $scope.username = response[0].username;
      });

};
$scope.getUserData();

});

