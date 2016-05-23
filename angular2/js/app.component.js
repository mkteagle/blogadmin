(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                templateURL: '../templates/bloglist.html'
            })
            .Class({
                constructor: function() {}
            });
})(window.app || (window.app = {}));
