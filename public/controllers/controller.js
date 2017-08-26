angular.module("myApp").controller('controller', function(service, $scope) {
    $scope.data = function() {
        service.getData().then(function(response) {
        $scope.displaySymmetry = response;
        });
    }
    $scope.update = function(id,desc) {
        service.updateData(id,desc)
    }
    $scope.delete = function(id) {
        service.deleteData(id)
    }
    $scope.add = function(name,desc,price,img) {
        service.addData(name,desc,price,img)
    }
    $scope.calculator = function(val, name) {
      $scope.exercises = service.calculator(val,name)

    }


    $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Barbell Bicep Curl", "Tricep EZ-Bar Curl", "Shoulder Barbell Press"];
    $scope.repetitions = [5,6,7,8,9,10];
    $scope.weight = [5,6,7,8,9,10];


})
