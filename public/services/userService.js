 //create goal exercises/, postgoal on login,
  angular.module('myApp')
  .service('userService', function($http) {
    this.register = function(username, password, confirmpassword) {
      //creat username

      if(username.length < 3){
        alert("Username must be equal to or greater than 6 characters.")
        return;
      }
      else if(password !== confirmpassword){
        alert("Password and Confirmation Password must be the same.")
        return;
      }
      return $http({
        method: "POST",
        url: 'http://localhost:3000/api/user',
        data: {"username": username, "password": password}
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        alert("Choose a different password")
        console.log('ERROR LOGGING IN!', err);
      })
    }
    this.addGoalData = function(username) {
      console.log("service addGoalData " + username)
        return $http({
            method: "POST",
            url: 'http://localhost:3000/api/goal/',
            data: {"username": username}
        })
        .then(function(res) {
          return res.data;
        })
    }

    this.login = function(username, password) {
      //find user via login
      
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/user/'
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
        url: 'http://localhost:3000/api/logout'
      })
      .then(function(res) {
        return res.data;
      })
      .catch(function(err) {
        console.log(err);
      })
    }
  })
