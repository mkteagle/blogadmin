(function () {
    angular.module('loginController', [])
.controller('loginController', loginController);
function loginController() {
    // controller data and functions
    var self = this;
    self.facebook = facebook;
    self.google = google;
    
    function facebook() {
        location.href="/auth/facebook";
    }
    function google() {
        location.href="/auth/google";
    }
}
})();