angular.module("myApp").service("currentService", function($http) {
  
    this.getCurrentData = function() {
        return $http({
            method: "GET",
            url: 'https://vintruv-fitness.herokuapp.com/api/exercises'
            // url: 'https://vintruv-fitness.herokuapp.com/api/exercises'
        }).then(function(response) {
            response.data.numRecords = 10;
            response.data.page = 1;
            response.data.next = function(){
              if(response.data.length/10 >= response.data.page ) {
              response.data.page = response.data.page + 1;
              }
            };
            response.data.back = function(){
              if(response.data.page > 1) {
              response.data.page = response.data.page - 1;
              }
            }
        return response.data;
        })
    }
    //use a botton in advanced.html


      this.dataSource1 =  {
            chart: {
              caption: "Deadlift",
              //more chart properties - explained later
            },
            data: [{
                label: "Target",
                value: "200"
              },
              {
                  label: "Most Recent",
                  value: "200"
                }]
            }


      this.dataSource2 = {
          chart: {
            caption: "Deadlift",
            //more chart properties - explained later
          },
          data: [{
              label: "Target",
              value: "200"
            },
                        {
                            label: "Target",
                            value: "200"
                          }]
                }
                this.dataSource3 = {
                    chart: {
                      caption: "PendlayRow",
                      //more chart properties - explained later
                    },
                    data: [{
                        label: "Target",
                        value: "200"
                      },
                      {
                          label: "Most recent",
                          value: "200"
                        }]
                    }
                    this.dataSource4 = {
                        chart: {
                          caption: "Pendlay Row",
                          //more chart properties - explained later
                        },
                        data: [{
                            label: "Target",
                            value: "200"
                          },
                              {
                                  label: "Target",
                                  value: "200"
                                }]
                        }
                        this.dataSource5 = {
                            chart: {
                              caption: "Back Squat",
                              //more chart properties - explained later
                            },
                            data: [{
                                label: "Target",
                                value: "200"
                              },
                              {
                                  label: "Target",
                                  value: "200"
                                }]
                            }
                            this.dataSource6 = {
                                chart: {
                                  caption: "Back Squat",
                                  //more chart properties - explained later
                                },
                                data: [{
                                    label: "Target",
                                    value: "200"
                                  },
                                  {
                                  label: "Target",
                                  value: "200"
                                }]
                                }
                                this.dataSource7 = {
                                    chart: {
                                      caption: "Front Squat",
                                      //more chart properties - explained later
                                    },
                                    data: [{
                                        label: "Target",
                                        value: "200"
                                      },
                                      {
                                      label: "Target",
                                      value: "200"
                                    }]
                                    }
                                    this.dataSource8 = {
                                        chart: {
                                          caption: "Front Squat",
                                          //more chart properties - explained later
                                        },
                                        data: [{
                                            label: "Target",
                                            value: "200"
                                          },
                                          {
                                          label: "Target",
                                          value: "200"
                                        }]
                                        }
                  this.dataSource9 = {
                      chart: {
                        caption: "Bench Press",
                        //more chart properties - explained later
                      },
                      data: [{
                          label: "Target",
                          value: "200"
                        },
                        {
                        label: "Target",
                        value: "200"
                      }]
                      }
                      this.dataSource10 = {
                          chart: {
                            caption: "Bench Press",
                            //more chart properties - explained later
                          },
                          data: [{
                              label: "Target",
                              value: "200"
                            },
                            {
                            label: "Target",
                            value: "200"
                          }]
                          }
                          this.dataSource11 = {
                              chart: {
                                caption: "Incline Bench",
                                //more chart properties - explained later
                              },
                              data: [{
                                  label: "Target",
                                  value: "200"
                                },{
                                label: "Target",
                                value: "200"
                              }]
                              }
                              this.dataSource12 = {
                                  chart: {
                                    caption: "Incline Bench",
                                    //more chart properties - explained later
                                  },
                                  data: [{
                                      label: "Target",
                                      value: "200"
                                    },{
                                    label: "Target",
                                    value: "200"
                                  }]
                                  }
                                  this.dataSource13 = {
                                      chart: {
                                        caption: "Shoulder Press",
                                        //more chart properties - explained later
                                      },
                                      data: [{
                                          label: "Target",
                                          value: "200"
                                        },{
                                        label: "Target",
                                        value: "200"
                                      }]
                                      }
                                      this.dataSource14 = {
                                          chart: {
                                            caption: "Shoulder Press",
                                            //more chart properties - explained later
                                          },
                                          data: [{
                                              label: "Target",
                                              value: "200"
                                            },{
                                            label: "Target",
                                            value: "200"
                                          }]
                                          }
            this.dataSource15 = {
                chart: {
                  caption: "Barbell Bicep Curl",
                  //more chart properties - explained later
                },
                data: [{
                    label: "Target",
                    value: "200"
                  },{
                  label: "Target",
                  value: "200"
                }]
                }
                this.dataSource16 = {
                    chart: {
                      caption: "Barbell Bicep Curl",
                      //more chart properties - explained later
                    },
                    data: [{
                        label: "Target",
                        value: "200"
                      },{
                      label: "Target",
                      value: "200"
                    }]
                }
                this.dataSource17 = {
                    chart: {
                      caption: "Barbell Tricep Curl",
                      //more chart properties - explained later
                    },
                    data: [{
                        label: "Target",
                        value: "200"
                      },{
                      label: "Target",
                      value: "200"
                    }]
                    }
                    this.dataSource18 = {
                        chart: {
                          caption: "Barbell Tricep Curl",
                          //more chart properties - explained later
                        },
                        data: [{
                            label: "Target",
                            value: "201"
                          },{
                          label: "Target",
                          value: "201"
                        }]
                    }
    this.getLastCurrent = function() {
        return $http({
            method: "GET",
            url: 'https://vintruv-fitness.herokuapp.com/api/lastexercise/'
        }).then(function(response) {
        return response.data;
        })
    }

    this.getLastFiveCurrent = function() {
        return $http({
            method: "GET",
            url: 'https://vintruv-fitness.herokuapp.com/api/exercises'
        }).then(function(response) {
          const weightLiftData = {
            deadlift: [],
            benchpress: [],
            pendlayrow: [],
            backsquat: [],
            frontsquat: [],
            inclinebench: [],
            shoulderpress: [],
            bicepcurl: [],
            tricepcurl: []
          }
          let counter = 0
            for (obj of response.data){
                for(exercises in obj){
                  console.log('exercised')
                  if(weightLiftData[exercises]){
                    weightLiftData[exercises].push({label: exercises, value: obj[exercises]})
                }
              }
              counter ++
              if(counter > 7){
                return weightLiftData
              }
            }
        return weightLiftData;
        })
    }

    this.addCurrentData = function(frontsquat, backsquat, pendlayrow, deadlift, shoulderpress, inclinebench, benchpress, bicepcurl, tricepcurl, deadliftreps, pendlayrowreps, backsquatreps, frontsquatreps, benchpressreps, inclinebenchreps, shoulderpressreps, bicepcurlreps, tricepcurlreps) {
        return $http({
            method: "POST",
            url: 'https://vintruv-fitness.herokuapp.com/api/exercise/',
            data: {
              "frontsquat" : frontsquat, 
              "backsquat" : backsquat, 
              "pendlayrow" : pendlayrow, 
              "deadlift" : deadlift,
              "shoulderpress" : shoulderpress, 
              "inclinebench" : inclinebench, 
              "benchpress" : benchpress, 
              "bicepcurl" : bicepcurl, 
              "tricepcurl" : tricepcurl, 

              "frontsquatreps" : frontsquatreps, 
              "backsquatreps" : backsquatreps, 
              "pendlayrowreps" : pendlayrowreps, 
              "deadliftreps" : deadliftreps,
              "shoulderpressreps" : shoulderpressreps, 
              "inclinebenchreps" : inclinebenchreps, 
              "benchpressreps" : benchpressreps, 
              "bicepcurlreps" : bicepcurlreps, 
              "tricepcurlreps" : tricepcurlreps, 
            }
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
