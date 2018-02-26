describe("Parking Controller Specification", function () {
    var $scope;

    beforeEach(module("parking"));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller("parkingCtrl", {
            $scope: $scope
        });
    }));

    it("The car should ne parked", function () {
        var car = {
            plate: "AAAA9999"
        };
        $scope.park(car);
        expect($scope.cars.length).toBe(1);
        expect($scope.car).toBeUndefined();
    });
});