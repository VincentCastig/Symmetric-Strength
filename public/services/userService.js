 //create goal exercises/, postgoal on login,
  angular.module('myApp')
  .service('userService', function($http) {
    this.register = function(username, password, confirmpassword) {
      //creat username
      if(password.length <= 6){
        alert("Password must be equal to or greater than 6 characters.")
      }
      return $http({
        method: "POST",
        url: '/api/user',
        data: credentials
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        console.log('ERROR LOGGING IN!', err);
      })
    }
    this.addGoalData = function(username) {
        return $http({
            method: "POST",
            url: 'http://localhost:3000/api/goal/'
        })
    }

    this.login = function(username, password) {
      //find user via login
      if(password.length <= 6){
        alert("Password must be equal to or greater than 6 characters.")
      }
      return $http({
        method: 'GET',
        url: '/api/user/' + username + '/' + password
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }

    this.logout = function() {
      return $http({
        method: 'GET',
        url: '/api/logout'
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  })
