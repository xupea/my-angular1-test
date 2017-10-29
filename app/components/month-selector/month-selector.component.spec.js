describe('demolist', function() {

  beforeEach(module('monthSelector'));

  describe('MonthSelectorController', function() {

    var ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('monthSelector');
    }));
    
    it('should create a list', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phones.length).toEqual(3);

    })
 
  });

});