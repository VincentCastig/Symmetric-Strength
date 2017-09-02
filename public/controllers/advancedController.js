angular.module("myApp").controller('advancedController', function(goalService, currentService, $scope) {
//
  $scope.registerData = function() {
      advancedService.getRegisterData().then(function(response) {
        console.log(response)
      $scope.displayUser = response;

      });
  }

    $scope.update = function(id,desc) {
        advancedService.updateData(id,desc)
    }
    $scope.delete = function(id) {
        advancedService.deleteData(id)
    }
    $scope.add = function(name,desc,price,img) {
        advancedService.addData(name,desc,price,img)
    }
    $scope.calculator = function(val, name) {
      $scope.exercises = advancedService.calculator(val,name)

    }


    $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Barbell Bicep Curl", "Tricep EZ-Bar Curl", "Shoulder Barbell Press"];
    $scope.repetitions = [5,6,7,8,9,10];

    $scope.currentData = function() {
        advancedService.getdata().then(function(response) {
          console.log("controller.js - displaySymmetry")
        $scope.displayCurrentSymmetry = response;
          console.log(response)
        });
    }
    $scope.currentUpdate = function(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress,
     inclinebench, bench, bicepcurl, tricepcurl) {
        advancedService.updateData(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress,
         inclinebench, bench, bicepcurl, tricepcurl)
    }
    $scope.currentDelete = function(id) {
        advancedService.deleteData(id)
    }
    $scope.currentAdd = function(name,desc,price,img) {
        advancedService.addData(name,desc,price,img)
    }
    $scope.currentCalculator = function(val, name) {
      $scope.currentExercises = advancedService.calculator(val,name)

    }




    $scope.registerData = function() {
        goalService.getRegisterData().then(function(response) {
          console.log(response)
        $scope.displayUser = response;

        });
    }

      $scope.goalData = function() {
          goalService.getGoalData().then(function(response) {

          $scope.displaySymmetry = response;
          console.log(response)

          });
      }
      $scope.update = function(id,desc) {
          goalService.updateData(id,desc)
      }
      $scope.delete = function(id) {
          goalService.deleteData(id)
      }
      $scope.add = function(name,desc,price,img) {
          goalService.addData(name,desc,price,img)
      }
      $scope.calculator = function(val, name) {
        $scope.exercises = goalService.calculator(val,name)
      }

      $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Barbell Bicep Curl", "Tricep EZ-Bar Curl", "Shoulder Barbell Press"];
      $scope.repetitions = [5,6,7,8,9,10];

})
