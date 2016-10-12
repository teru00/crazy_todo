app = angular.module('crazyTodoApp', ['ui.bootstrap'])

# CSRFのトークンを設定するようにする
app.config ($httpProvider) ->
  authToken = $("meta[name=\"csrf-token\"]").attr("content")
  $httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

# AngularJSがturbolinksと一緒に動くようにする
$(document).on 'page:load', ->
  $('[ng-app]').each ->
    module = $(this).attr('ng-app')
    angular.bootstrap(this, [module])