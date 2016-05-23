(function () {
    angular
        .module('blogController', [])
        .controller('BlogController', BlogController);
    BlogController.$inject = ['$mdSidenav', '$mdBottomSheet', '$mdDialog', '$mdMedia', '$stateParams', '$scope', '$location', '$filter', '$http', '$rootScope'];
    function BlogController($mdSidenav, $mdBottomSheet, $mdDialog, $mdMedia, $stateParams, $scope, $location, $filter, $http, $rootScope) {
        var self = this;
        self.$http = $http;
        self.addBlog = addBlog;
        self.firstList = firstList;
        self.removeBlog = removeBlog;
        self.getPost = getPost;
        self.currentPage = 1;
        self.pageSize = 20;
        self.reverse = '';
        self.getCounty = getCounty;
        self.getCounties = getCounties;
        self.location = $location;
        self.showEditBlog = showEditBlog;
        self.show = false;
        self.showdate = false;
        self.categoryName = '';
        self.isActive = 'master';
        self.addCategory = addCategory;
        self.getCategories = getCategories;
        self.getCategory = getCategory;
        self.deleteFeatured = deleteFeatured;
        self.addCategoryParams = addCategoryParams;
        self.addCountyParams = addCountyParams;
        self.createCategory = createCategory;
        self.initPost = initPost;
        self.init = init;
        self.uploadFiles = function (files) {
        };
        function init() {
            console.log(firebase.database());
            var blogs = firebase.database().ref('blog/');
            blogs.on('value', function(snapshot) {
                self.blogs = snapshot.val();
            });
            console.log(self.blogs);
        }
        function initPost() {
            console.log(self.blogs);
            angular.forEach(self.blogs, function (blog) {
                if (blog.param === $stateParams.blogParam) {
                    self.post = blog;
                    console.log(self.post);
                }
            });
        }
        function deleteFeatured () {

        }
        self.sort = function (keyname) {
            self.sortKey = keyname; //set the sortKey to the param passed
            self.reverse = !self.reverse; //if true make it false and vice versa
        };
        function createCategory (category) {
            self.categoryParam = $filter('spaceless')(category);
            self.addCategoryParams(self.post, self.categoryParam);
        }
        function addCategory() {

            self.categoryName = '';
        }
        function addCategoryParams (post, category) {

        }
        function addCountyParams () {

        }
        self.showAdvanced = function (ev, post) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: './templates/preview-post.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    blog: post
                }
            });
        };
        function showEditBlog() {
            var reg = /^(?:((?:https?|s?ftp):)\/\/)([^:\/\s]+)(?::(\d*))?(?:\/([^\s?#]+)?([?][^?#]*)?(#.*)?)?/;
            //regex to get first part of path and return it
            if (self.location = '/edit/') {
                self.show = true;
                return self.show;
            }
        }
        function getCounties(cParam) {

        }
        function firstList() {

        }
        function getCategory() {
            self.category = $filter('spaces')($stateParams.catParam);
        }
        function getCategories(catParam) {

        }
        function getCounty() {
            self.county = $stateParams.cParam;
        }
        
        function getPost(blog) {
            self.post = blog;
        }
        function removeBlog(blog) {

        }
        /**
         * First hide the bottomsheet IF visible, then
         * hide or Show the 'left' sideNav area
         */
        

        function addBlog() {
            svgindex++;
        }
        self.countOf = function (text) {
            var s = text ? text.split(/\s+/) : 0; // it splits the text on space/tab/enter
            return s ? s.length : '';
        };
        self.taggerEnabled = false;
        self.editorEnabled = false;
        self.enableEditor = function (dates) {
            self.editorEnabled = true;
            self.editableValue = dates;
        };
        self.disableEditor = function () {
            self.editorEnabled = false;
        };
        self.save = function () {
            self.value = self.editableValue;
            self.disableEditor();
        };
        self.enableTagger = function (tags) {
            self.taggerEnabled = true;
            self.editableTag = tags;
        };
        self.disableTagger = function () {
            self.taggerEnabled = false;
        };
        self.tagSave = function () {
            self.value = self.editableTag;
            self.disableTagger();
        };
    }
    
})();
