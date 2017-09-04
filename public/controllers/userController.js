angular.module('myApp').controller('userController', function(userService, $scope, $state) {


  $scope.register = function(username, password, confirmpassword) {
    console.log('userController and username is : ' + username)
    userService.register(username, password, confirmpassword)
    .then(function (response) {

            console.log("scope.register")
            console.log(response)
    })
  }
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

  $scope.login = function(username, password) {
    console.log('loginController and username is : ' + username)
    console.log('loginController and password is : ' + password)
    userService.login(username, password)
    .then(function (response) {
      console.log(response)
        console.log('login', response);
        $state.go('basic')
    })
  }

});

/*$scope.data = function() {
    service.getData().then(function(response) {
      console.log("controller.js - displaySymmetry")
    $scope.displaySymmetry = response;

  }); */
