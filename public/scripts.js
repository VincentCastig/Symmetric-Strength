$(document).ready(function(){
 $('#allexercises').hide();
    console.log('ready')
     $('#add-todo').on('click', function () {
        console.log('first-todo')
               $('#allexercises').fadeToggle('fast', 'linear');
               console.log('add-todo')
           });
    // var advanceTask = function(task) {
    //   var modified = task.innerText.trim()
    //   for (var i = 0; i < listo.length; i++) {
    //     if (listo[i].task === modified) {
    //       if (listo[i].id === 'new') {
    //         listo[i].id = 'inProgress';
    //       } else if (listo[i].id === 'inProgress') {
    //         listo[i].id = 'archived';
    //       } else {
    //         listo.splice(i, 1);
    //       }
    //       break;
    //     }
    //   }
    //   task.remove();
    // };
  
  
    // var listo = []
  
    // var Task = function(task){
    //   this.task = task;
    //   this.id = 'new';
    // }
    // var addTask = function(task) {
    //     if(task) {
    //         task = new Task(task);
    //         listo.push(task);
  
    //         $('#newItemInput').val('');
    //           $('#newList').append(
    //                         '<a href="#finish" class="" id="item">' +
    //                         '<li class="list-group-item">' +
    //                         '<h3>' + task.task + '</h3>'+
    //                         '<span class="arrow pull-right">' +
    //                         '<i class="glyphicon glyphicon-arrow-right">' +
    //                         '</span>' +
    //                         '</li>' +
    //                         '</a>'
    //                     );
  
    //     }
    // };
  
  
    //   $('#saveNewItem').on('click', function (e) {
    //       e.preventDefault();
    //       var task = $('#newItemInput').val().trim();
    //       addTask(task);
    //   });
  
    //   $('#add-todo').on('click', function () {
    //       $('#newTaskForm').fadeToggle('fast', 'linear');
    //   });
    //   //closes form
    //   $('#cancel').on('click', function (e) {
    //       e.preventDefault();
    //       $('#newTaskForm').fadeToggle('fast', 'linear');
    //   });
  
    //   //First let's make a function that allows us to change the status of an item from 'new' to 'inProgress'.
    //   $(document).on('click', '#item', function(e) {
    //       e.preventDefault();
    //   });
  
    //   //Now let's set a variable called task so that we can access the 'this' keyword to pass it into another function.
  
    //   //We are also going to change it's ID to the string 'inProgress'.
  
  
    //   $(document).on('click', '#item', function(e) {
    //       e.preventDefault();
    //     var task = this;
    //     advanceTask(task);
    //     this.id = 'inProgress';
    //   });
  
  
    //   //The last thing this function needs is the ability to move the actual list item. We do that by pulling all of the html around the item itself.
  
  
    //   $(document).on('click', '#item', function(e) {
    //       e.preventDefault();
    //     var task = this;
    //     advanceTask(task);
    //     this.id = 'inProgress';
    //     $('#currentList').append(this.outerHTML);
    //   });
  
  
    //   //We can also move the items from 'inProgress' to 'archived' with a similar function:
  
  
    //   $(document).on('click', '#inProgress', function (e) {
    //     e.preventDefault();
    //     var task = this;
    //     task.id = "archived";
    //     var changeIcon = task.outerHTML.replace('glyphicon-arrow-right', 'glyphicon-remove');
    //     advanceTask(task);
    //     $('#archivedList').append(changeIcon);
    //   });
  
  
    //   //Finally, in a similar fashion we want to create a way to delete the items on the list. All we have to do is pass a task into the advanceTask function without a new id. You can study the advanceTask function we built to understand how it works.
  
  
    //   $(document).on('click', '#archived', function (e) {
    //     e.preventDefault();
    //     var task = this;
    //     advanceTask(task);
    //   });
  
  });
  