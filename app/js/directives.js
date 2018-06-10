parking.directive("alert", function () {
    return {
        restrict: 'E',
        scope: {
            topic: '=',
            description: '='
        },
        templateUrl: "alert.html",
        replace: true,
        transclude: true,
        link: function (scope, element, attrs, ctrl, transcludeFn) {
            element.bind("click", function () {
                scope.$apply(function () {
                    scope.hideAlert = !scope.hideAlert;
                });
            });
        }
    };
})