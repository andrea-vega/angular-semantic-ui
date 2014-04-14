function RootController ($scope, $window) {
    $scope.sidebar = false;
    $scope.show_dimmer = false;

    $scope.show_sidebar = function(){
        $scope.sidebar = !$scope.sidebar;
    }

    $scope.dimmer = function() {
        $scope.show_dimmer = true;
    }

    $scope.cancel = function(){
        $scope.show_dimmer = false;
    }

    $scope.github = function() {
        window.location = 'https://github.com/angularify/angular-semantic-ui';
    }
}