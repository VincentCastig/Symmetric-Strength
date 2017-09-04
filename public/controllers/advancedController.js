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



    $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Barbell Bicep Curl", "Tricep EZ-Bar Curl", "Shoulder Barbell Press"];
    $scope.repetitions = [5,6,7,8,9,10];

    $scope.getCurrentData = function() {
        currentService.getCurrentData().then(function(response) {
        $scope.displayCurrent = response;

        $scope.next = response.next;
        $scope.back = response.back;

        $scope.getLastCurrent = function() {
          let username = response[response.length-1].userid
            currentService.getLastCurrent(username).then(function(response) {
              const lastData = response;

          });
        };
      })
      }
      $scope.dataSource1 = currentService.dataSource1;
      $scope.dataSource2 = currentService.dataSource2;
      $scope.dataSource3 = currentService.dataSource3;
      $scope.dataSource4 = currentService.dataSource4;
      $scope.dataSource5 = currentService.dataSource5;
      $scope.dataSource6 = currentService.dataSource6;
      $scope.dataSource7 = currentService.dataSource7;
      $scope.dataSource8 = currentService.dataSource8;
      $scope.dataSource9 = currentService.dataSource9;
      $scope.dataSource10 = currentService.dataSource10;
      $scope.dataSource11 = currentService.dataSource11;
      $scope.dataSource12 = currentService.dataSource12;
      $scope.dataSource13 = currentService.dataSource13;
      $scope.dataSource14 = currentService.dataSource14;
      $scope.dataSource15 = currentService.dataSource15;
      $scope.dataSource16 = currentService.dataSource16;
      $scope.dataSource17 = currentService.dataSource17;
      $scope.dataSource18 = currentService.dataSource18;

      $scope.attrs = {

    "caption": "Sales Comparison: 2013 versus 2014",
    "subCaption": "ok",
    "numberprefix": "$",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "30000",
    "captionpadding": "30",
    "linethickness": "3",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,",
    "showborder": "0"
};

$scope.goalattrs = {"palettecolors": "#000, #e44a00" };



    $scope.currentUpdate = function(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress,
     inclinebench, bench, bicepcurl, tricepcurl) {
        currentService.updateData(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress,
         inclinebench, bench, bicepcurl, tricepcurl)
    }
    $scope.currentDelete = function(id) {
        currentService.deleteData(id)
    }
    $scope.currentAdd = function(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress,
     inclinebench, bench, bicepcurl, tricepcurl) {
        currentService.currentData(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress,
         inclinebench, bench, bicepcurl, tricepcurl)
    }
    $scope.currentCalculator = function(val, name) {
      $scope.currentExercises = currentService.calculator(val,name)

    }


    $scope.registerData = function() {
        goalService.getRegisterData().then(function(response) {
          console.log(response)
        $scope.displayUser = response;

        });
    }

      $scope.getGoalData = function() {
          goalService.getGoalData().then(function(response) {

          $scope.displayGoalSymmetry = response;
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
