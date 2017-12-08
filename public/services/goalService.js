//update goalExercise, getall goalExercise,
angular.module("myApp").service("goalService", function($http) {
  this.getRegisterData = function() {
      return $http({
          method: "GET",
          url: 'http://vintruv-fitness.herokuapp.com/api/user'
      }).then(function(response) {
          return response.data;
      })
  }
    this.getGoalData = function() {
        return $http({
            method: "GET",
            url: 'http://vintruv-fitness.herokuapp.com/api/goals'
        }).then(function(response) {
            return response.data;
        })
    }
    this.updateData = function(id,desc) {
        return $http({
            method: "PUT",
            url: 'http://vintruv-fitness.herokuapp.com/api/goal/' + id + "?desc=" + desc
        })
    }
    this.deleteData = function(id) {
        return $http({
            method: "DELETE",
            url: 'http://vintruv-fitness.herokuapp.com/api/goal/' + id
        })
    }
    this.addData = function(name,desc,price,img) {
        return $http({
            method: "POST",
            url: 'http://vintruv-fitness.herokuapp.com/api/goal/',
            data: {"name" : name, "description" : desc, "price" : price, "imageurl" : img}
        })
    }


    this.calculator = function(val, name) {
      const exercises = {};

      switch(name) {
        case 'Bench Press':
            exercises.newFrontSquat = val * 1.090909
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = val
            exercises.newDeadlift = val * 1.57575758
            exercises.newShoulderPress = val * 0.66666667
            exercises.newInclineBench = val * 0.8181812
            exercises.newPendlayRow = val * 0.8181812
            exercises.newBicepCurl = val * 0.5
            exercises.newTricepCurl = val * 0.5
            //bench to squat 1.552
            //1.48 is better
            //mine is 1.363

            break;
        case 'Deadlift':
            exercises.newFrontSquat = val * 0.69230769
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = val * 0.63461538
            exercises.newDeadlift = val
            exercises.newShoulderPress = val * 0.42307692
            exercises.newInclineBench = val * 0.51923077
            exercises.newPendlayRow = val * 0.51923077
            exercises.newBicepCurl = val * 0.31730769
            exercises.newTricepCurl = val * 0.31730769
            break;
        case 'Front Squat':
            exercises.newFrontSquat = val
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = val * 0.91666667
            exercises.newDeadlift = val * 1.444444444
            exercises.newShoulderPress = val * 0.61111111
            exercises.newInclineBench = val * 0.75
            exercises.newPendlayRow = val * 0.75
            exercises.newBicepCurl = exercises.newBench / 2
            exercises.newTricepCurl = exercises.newBench / 2
            break;
        case 'Back Squat':
            exercises.newFrontSquat = val / 1.25
            exercises.newBackSquat = val
            exercises.newBench = val / 1.36363636
            exercises.newDeadlift = val / 0.86538462
            exercises.newShoulderPress = val * 0.488888889
            exercises.newInclineBench = val * 0.6
            exercises.newPendlayRow = val * 0.6
            exercises.newBicepCurl = exercises.newBench / 2
            exercises.newTricepCurl = exercises.newBench / 2
            break;
        case 'Barbell Bicep Curl':
            exercises.newBench = val * 2
            exercises.newFrontSquat = exercises.newBench * 1.090909
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newDeadlift = exercises.newBench * 1.57575758
            exercises.newShoulderPress = exercises.newBench * 0.66666667
            exercises.newInclineBench = exercises.newBench * 0.8181812
            exercises.newPendlayRow = exercises.newBench * 0.8181812
            exercises.newBicepCurl = val
            exercises.newTricepCurl = val
            break;
        case 'Tricep EZ-Bar Curl':
            exercises.newBench = val * 2
            exercises.newFrontSquat = exercises.newBench * 1.090909
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newDeadlift = exercises.newBench * 1.57575758
            exercises.newShoulderPress = exercises.newBench * 0.66666667
            exercises.newInclineBench = exercises.newBench * 0.8181812
            exercises.newPendlayRow = exercises.newBench * 0.8181812
            exercises.newBicepCurl = val
            exercises.newTricepCurl = val
            break;
        case 'Shoulder Barbell Press':
            exercises.newFrontSquat = val * 1.63636364
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = val * 1.5
            exercises.newDeadlift = val * 2.36363636
            exercises.newShoulderPress = val
            exercises.newInclineBench = val * 1.22727273
            exercises.newPendlayRow = val * 1.22727273
            exercises.newBicepCurl = exercises.newBench / 2
            exercises.newTricepCurl = exercises.newBench / 2
            break;


          }

          for (exercise in exercises){
            exercises[exercise] = Math.round(exercises[exercise])
            console.log(exercise)
          }
            console.log(exercises.newFrontSquat)
        return exercises;
      }



})
