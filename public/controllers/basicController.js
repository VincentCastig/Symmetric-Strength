angular.module("myApp").controller('basicController', function(basicService, $scope) {

    $scope.calculator = function(weight, exerciseName, unitMeasurement) {
      $scope.exercises = basicService.calculator(weight, exerciseName)
    }

    $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Shoulder Barbell Press", "Barbell Bicep Curl", "Tricep EZ-Bar Curl"];
    $scope.repetitions = [1,2,3,4,5,6,7,8,9,10];
    $scope.units = ["Lbs", "Kilograms"];

})
