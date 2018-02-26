parking.controller("parkingCtrl", function ($scope) {
    // Binding the car's array to the scope
    $scope.cars = [
        {plate: '6MBV006'},
        {plate: '5BBM299'},
        {plate: '5AOJ230'}
    ];
    // Binding the park function to scope
    $scope.park = function (car) {
        $scope.cars.push(angular.copy(car));
        delete $scope.car;
    };
});