'use strict';

// register `monthSelecto` component, along with its associated controller and template
angular.
  module('monthSelector').
  component('monthSelector', {
    templateUrl: 'components/month-selector/month-selector.template.html',
    // controller: [
    //   'Month',
    //   function MonthSelectorController(Month) {
    //     this.phones = [];
    //     this.orderProp = 'age';
    //   }
    // ]
    controller: function() {
      this.phones = [
        {
          name: 'Apple',
          snippet: 'Fast just got faster with IOS13'
        },
        {
          name: 'Apple2',
          snippet: 'Fast just got faster with IOS13'
        },
        {
          name: 'Apple3',
          snippet: 'Fast just got faster with IOS13'
        }
      ];
    }
  })