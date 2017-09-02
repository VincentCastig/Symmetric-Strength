angular.module('myApp').controller('userController', function(userService, $scope) {


  $scope.register = function(username, password, confirmpassword) {
    console.log('registerController and username is : ' + username)
    userService.register(username, password, confirmpassword)
    .then(function (response) {
      if (response.status == 200) {
        console.log('signedup', response);
        $state.go('login')
      }
    })
  }
  $scope.addGoalData = function(username) {
      userService.addGoalData(username)
  }

  $scope.login = function(username, password) {
    console.log('registerController and username is : ' + username)
    userService.login(username, password)
    .then(function (response) {
      if (response.status == 200) {
        console.log('login', response);
        $scope.username = response;
        $state.go('basic')
      }
    })
  }

});

/*$scope.data = function() {
    service.getData().then(function(response) {
      console.log("controller.js - displaySymmetry")
    $scope.displaySymmetry = response;

  }); */
