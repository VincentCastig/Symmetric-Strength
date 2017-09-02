angular.module("myApp").service("basicService", function($http) {
    this.calculator = function(weight, exerciseName) {
      const exercises = {};

      switch(exerciseName) {
        case 'Bench Press':
            exercises.newFrontSquat = weight * 1.090909
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = weight
            exercises.newDeadlift = weight * 1.57575758
            exercises.newShoulderPress = weight * 0.66666667
            exercises.newInclineBench = weight * 0.8181812
            exercises.newPendlayRow = weight * 0.8181812
            exercises.newBicepCurl = weight * 0.5
            exercises.newTricepCurl = weight * 0.5
            //bench to squat 1.552
            //1.48 is better
            //mine is 1.363
            break;
        case 'Deadlift':
            exercises.newFrontSquat = weight * 0.69230769
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = weight * 0.63461538
            exercises.newDeadlift = weight
            exercises.newShoulderPress = weight * 0.42307692
            exercises.newInclineBench = weight * 0.51923077
            exercises.newPendlayRow = weight * 0.51923077
            exercises.newBicepCurl = weight * 0.31730769
            exercises.newTricepCurl = weight * 0.31730769
            break;
        case 'Front Squat':
            exercises.newFrontSquat = weight
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = weight * 0.91666667
            exercises.newDeadlift = weight * 1.444444444
            exercises.newShoulderPress = weight * 0.61111111
            exercises.newInclineBench = weight * 0.75
            exercises.newPendlayRow = weight * 0.75
            exercises.newBicepCurl = exercises.newBench / 2
            exercises.newTricepCurl = exercises.newBench / 2
            break;
        case 'Back Squat':
            exercises.newFrontSquat = weight / 1.25
            exercises.newBackSquat = weight
            exercises.newBench = weight / 1.36363636
            exercises.newDeadlift = weight / 0.86538462
            exercises.newShoulderPress = weight * 0.488888889
            exercises.newInclineBench = weight * 0.6
            exercises.newPendlayRow = weight * 0.6
            exercises.newBicepCurl = exercises.newBench / 2
            exercises.newTricepCurl = exercises.newBench / 2
            break;
        case 'Barbell Bicep Curl':
            exercises.newBench = weight * 2
            exercises.newFrontSquat = exercises.newBench * 1.090909
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newDeadlift = exercises.newBench * 1.57575758
            exercises.newShoulderPress = exercises.newBench * 0.66666667
            exercises.newInclineBench = exercises.newBench * 0.8181812
            exercises.newPendlayRow = exercises.newBench * 0.8181812
            exercises.newBicepCurl = weight
            exercises.newTricepCurl = weight
            break;
        case 'Tricep EZ-Bar Curl':
            exercises.newBench = weight * 2
            exercises.newFrontSquat = exercises.newBench * 1.090909
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newDeadlift = exercises.newBench * 1.57575758
            exercises.newShoulderPress = exercises.newBench * 0.66666667
            exercises.newInclineBench = exercises.newBench * 0.8181812
            exercises.newPendlayRow = exercises.newBench * 0.8181812
            exercises.newBicepCurl = weight
            exercises.newTricepCurl = weight
            break;
        case 'Shoulder Barbell Press':
            exercises.newFrontSquat = weight * 1.63636364
            exercises.newBackSquat = exercises.newFrontSquat * 1.25
            exercises.newBench = weight * 1.5
            exercises.newDeadlift = weight * 2.36363636
            exercises.newShoulderPress = weight
            exercises.newInclineBench = weight * 1.22727273
            exercises.newPendlayRow = weight * 1.22727273
            exercises.newBicepCurl = exercises.newBench / 2
            exercises.newTricepCurl = exercises.newBench / 2
            break;
          }

          function round5(exercises) {
              for (exercise in exercises){
                exercises[exercise] = Math.round(exercises[exercise])
                console.log(exercise)
                if(exercises[exercise] > 50) {
                  exercises[exercise] = Math.ceil(exercises[exercise]/5)*5
                }
              }
              return exercises;
          }
        return round5(exercises);
      }
})
