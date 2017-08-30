angular.module('myApp').controller('registerController', function(registerService, $scope) {

  $scope.register = function(username, password, confirmpassword) {
    console.log('registerController and username is : ')
    registerService.register(username, password, confirmpassword)
  }

})
