angular.module("myApp").controller('currentController', function(currentService, $scope) {
    $scope.data = function() {
        currentService.getData().then(function(response) {
          console.log("controller.js - displaySymmetry")
        $scope.displaySymmetry = response;

        });
    }
    $scope.update = function(id,desc) {
        currentService.updateData(id,desc)
    }
    $scope.delete = function(id) {
        currentService.deleteData(id)
    }
    $scope.add = function(name,desc,price,img) {
        currentService.addData(name,desc,price,img)
    }
    $scope.calculator = function(val, name) {
      $scope.exercises = currentService.calculator(val,name)

    }


    $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Barbell Bicep Curl", "Tricep EZ-Bar Curl", "Shoulder Barbell Press"];
    $scope.repetitions = [5,6,7,8,9,10];
    $scope.weight = [5,6,7,8,9,10];


})
