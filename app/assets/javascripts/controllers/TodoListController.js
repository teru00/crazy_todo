angular.module('crazyTodoApp')
.controller('TodoListController', ['$scope', 'TodoList', function($scope, TodoList) {
  $scope.list = TodoList();
  
  //Todo追加
  $scope.addTodo = function(todoDescription) {
    todo = { 'description' : todoDescription };
    $scope.list.todos.unshift(todo);
    $scope.todoDescription = '';
  };
  //Todo完了
  //Todo削除
  $scope.deleteTodo = function(todo) {
    $scope.list.todos.splice($scope.list.todos.indexOf(todo), 1);
  };
  //Todoの優先順位をあげる。
  $scope.upTodo = function(todo) {
    index = $scope.list.todos.indexOf(todo);
    if (index != 0) {
      $scope.list.todos.splice(index-1, 2, $scope.list.todos[index], $scope.list.todos[index-1]);
    }
  };
  
  //Todoをランダムソート
  $scope.randTodo = function() {
    $scope.list.todos.sort(function() { return Math.random() - 0.5});
  };
}]);