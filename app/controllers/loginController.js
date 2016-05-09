(function () {
    angular.module('loginController', [])
.controller('loginController', loginController);
function loginController() {
    // controller data and functions
    var self = this;
    self.facebook = facebook;
    self.google = google;
    self.logout = logout;
    function logout () {
        location.href="https://teagleseagles.auth0.com/v2/logout?returnTo=http://localhost:5000/#/login"
    }
    function facebook() {
        location.href="/auth/facebook";
    }
    function google() {
        location.href="/auth/google";
    }
}
})();