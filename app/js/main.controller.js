(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];

    /* @ngInject */
    function MainController(MainFactory) {
        var vm = this;
        vm.title = 'MainController';

      
    }
})();