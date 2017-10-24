angular.module("myApp").controller('advancedController', function(goalService, currentService, $scope) {

  $scope.isActive = false;
  $scope.activeButton = function(val) {
    if(val === 1) {
    $scope.allActive = false;
    $scope.noneActive = false;
    $scope.legsActive = false;
    $scope.backActive = false;
    $scope.chestActive = false;
    $scope.armsActive = false;
    $scope.shouldersActive = false;
    }
    else if(val === 2) {
      $scope.legsActive = !$scope.legsActive;
    }
    else if(val === 3) {
      $scope.backActive = !$scope.backActive;
    }
    else if(val === 4) {
      $scope.chestActive = !$scope.chestActive;
    }
    else if(val === 5) {
      $scope.armsActive = !$scope.armsActive;
    }
    else if(val === 6){
      $scope.shouldersActive = !$scope.shouldersActive;
    }
    else {
      $scope.allActive = true;
      $scope.noneActive = true;
      $scope.legsActive = true;
      $scope.backActive = true;
      $scope.chestActive = true;
      $scope.armsActive = true;
      $scope.shouldersActive = true;

    }
  }  

  $scope.getCurrentData = function() {
    currentService.getCurrentData().then(function(response) {
      if(response){
        $scope.displayCurrent = response;
        $scope.next = response.next;
        $scope.back = response.back;
      }
  })
  .catch(function() {
    console.log('error')
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

    "caption": "Workout Progress",
    "subCaption": "",
    "numberprefix": "",
    "plotgradientcolor": "",
    "bgcolor": "FFFFFF",
    "showalternatehgridcolor": "0",
    "divlinecolor": "CCCCCC",
    "showvalues": "0",
    "showcanvasborder": "0",
    "canvasborderalpha": "0",
    "canvasbordercolor": "CCCCCC",
    "canvasborderthickness": "1",
    "yaxismaxvalue": "2500",
    "captionpadding": "30",
    "linethickness": "3",
    "yaxisvaluespadding": "15",
    "legendshadow": "0",
    "legendborderalpha": "0",
    "palettecolors": "#f8bd19,",
    "showborder": "0"
};

$scope.goalattrs = {"palettecolors": "#000, #e44a00" };

$scope.updateMyChartData = function(val, name) {
  const exercises = currentService.calculator(val,name)
  console.log(exercises)
    $scope.dataSource1.data[0].label = "Deadlift";
    $scope.dataSource1.data[0].value = exercises.newDeadlift;
    $scope.dataSource3.data[0].label = "PendlayRow";
    $scope.dataSource3.data[0].value = exercises.newPendlayRow;
    $scope.dataSource5.data[0].label = "BackSquat";
    $scope.dataSource5.data[0].value = exercises.newBackSquat;
    $scope.dataSource7.data[0].label = "FrontSquat";
    $scope.dataSource7.data[0].value = exercises.newFrontSquat;
    $scope.dataSource9.data[0].label = "Bench-Press";
    $scope.dataSource9.data[0].value = exercises.newBench;
    $scope.dataSource11.data[0].label = "Incline-Bench";
    $scope.dataSource11.data[0].value = exercises.newInclineBench;
    $scope.dataSource13.data[0].label = "Shoulder-Press";
    $scope.dataSource13.data[0].value = exercises.newShoulderPress;
    $scope.dataSource15.data[0].label = "Bicep-Curl";
    $scope.dataSource15.data[0].value = exercises.newBicepCurl;
    $scope.dataSource17.data[0].label = "Tricep-Curl";
    $scope.dataSource17.data[0].value = exercises.newTricepCurl;
  }
  $scope.updateMyCurrentChartData = function() {

        currentService.getLastCurrent().then(function(response) {
          console.log(response[0]);
          $scope.dataSource1.data[1].label = "Deadlift";
          $scope.dataSource1.data[1].value = response[0].deadlift;
          $scope.dataSource3.data[1].label = "PendlayRow";
          $scope.dataSource3.data[1].value = response[0].pendlayrow;
          $scope.dataSource5.data[1].label = "BackSquat";
          $scope.dataSource5.data[1].value = response[0].backsquat;
          $scope.dataSource7.data[1].label = "FrontSquat";
          $scope.dataSource7.data[1].value = response[0].frontsquat;
          $scope.dataSource9.data[1].label = "Bench-Press";
          $scope.dataSource9.data[1].value = response[0].benchpress;
          $scope.dataSource11.data[1].label = "Incline-Bench";
          $scope.dataSource11.data[1].value = response[0].inclinebench;
          $scope.dataSource13.data[1].label = "Shoulder-Press";
          $scope.dataSource13.data[1].value = response[0].shoulderpress;
          $scope.dataSource15.data[1].label = "Bicep-Curl";
          $scope.dataSource15.data[1].value = response[0].bicepcurl;
          $scope.dataSource17.data[1].label = "Tricep-Curl";
          $scope.dataSource17.data[1].value = response[0].tricepcurl;
      })
      currentService.getLastFiveCurrent().then(function(response) {
        console.log(response);
        $scope.dataSource2.data = response.deadlift;
        $scope.dataSource4.data = response.pendlayrow;
        $scope.dataSource6.data = response.backsquat;
        $scope.dataSource8.data = response.frontsquat;
        $scope.dataSource10.data = response.benchpress;
        $scope.dataSource12.data = response.inclinebench;
        $scope.dataSource14.data = response.shoulderpress;
        $scope.dataSource16.data = response.bicepcurl;
        $scope.dataSource18.data = response.tricepcurl;
      })
    };




    $scope.currentDelete = function(id) {
        currentService.deleteData(id)
    }
    $scope.currentAdd = function(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, deadliftreps, pendlayrowreps, backsquatreps, frontsquatreps, benchpressreps, inclinebenchreps, shoulderpressreps, bicepcurlreps, tricepcurlreps) {
        currentService.addCurrentData(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, deadliftreps, pendlayrowreps, backsquatreps, frontsquatreps, benchpressreps, inclinebenchreps, shoulderpressreps, bicepcurlreps, tricepcurlreps)
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

      $scope.calculator = function(val, name) {
        $scope.exercises = goalService.calculator(val,name)
      }

      $scope.vehicles = ["Bench Press", "Deadlift", "Squat", "Barbell Bicep Curl", "Tricep EZ-Bar Curl", "Shoulder Barbell Press"];
      $scope.repetitions = [5,6,7,8,9,10];


      $scope.getCurrentData();
})


