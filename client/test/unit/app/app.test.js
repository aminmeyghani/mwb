// Generated by CoffeeScript 1.10.0
(function() {
  describe('App Controller Tests:', function() {
    var $controller;
    $controller = void 0;
    beforeEach(window.module('boiler'));
    beforeEach(inject(function(_$controller_) {
      return $controller = _$controller_;
    }));
    return describe('The controller', function() {
      return it('should have the name field defined', function() {
        var appCtrl;
        appCtrl = $controller('AppCtrl', {
          $scope: {}
        });
        return expect(appCtrl.name).toBeDefined();
      });
    });
  });

}).call(this);
