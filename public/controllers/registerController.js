angular.module('myApp').controller('registerController', function(service, $scope) {

  $scope.register = function(obj) {
    service.register(obj).then(function(response){
      console.log(response)
      $scope.user = response
    })
  }
})
