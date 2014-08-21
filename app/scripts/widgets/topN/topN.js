'use strict';

angular.module('ui.dashboard.widgets')
  .directive('topN', function () {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: 'scripts/widgets/topN/topN.html',
      scope: {
        data: '='
      },
      controller: function ($scope) {
        $scope.gridOptions = {
          data: 'items',
          enableRowSelection: false,
          enableColumnResize: true,
          columnDefs: [
            { field: 'name', displayName: 'Name' },
            { field: 'value', displayName: 'Value' }
          ]
        };
      },
      link: function postLink(scope) {
        scope.$watch('data', function (data) {
          if (data) {
            scope.items = _.sortBy(data, function (item) {
              return (-item.value);
            });
          }
        });
      }
    };
  });