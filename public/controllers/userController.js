angular.module('myApp').controller('userController', function(userService, $scope, $state) {


  
  $scope.addGoalData = function(username) {
    console.log("addGoalData " + username )
      userService.addGoalData(username)
      .then(function (response) {
              console.log("scope.addGoalData")
              console.log(response)
      })
      $scope.username = username
      $state.go('login')
  }
  console.log("getdata")

  

});

/*$scope.data = function() {
    service.getData().then(function(response) {
      console.log("controller.js - displaySymmetry")
    $scope.displaySymmetry = response;

  }); */
