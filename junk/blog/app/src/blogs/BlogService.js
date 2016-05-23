(function () {
    'use strict';
    angular.module('blogService', ['firebase'])
        .service('blogService', blogService);

    blogService.$inject = ['$firebaseArray', '$filter', '$firebaseAuth', '$firebaseObject', 'firebaseUrl', '$timeout', '$state', '$stateParams', 'Upload', 'S3UploadService'];

    function blogService($firebaseArray, $filter, $firebaseAuth, $firebaseObject, firebaseUrl, $timeout, $state, $stateParams, Upload, S3UploadService) {
        var ref = new Firebase(firebaseUrl);
        var blogRef = new Firebase(firebaseUrl + '/blog');
        var date = Date.now();
        var newdate = $filter('date')(new Date(), 'MM/dd/yyyy');
        var self = this;
        self.authObj = $firebaseAuth(ref);
        self.blogs = $firebaseArray(blogRef);
        self.addBlog = addBlog;
        self.getChange = getChange;
        self.removeBlog = removeBlog;
        self.getPost = getPost;
        self.addPostParam = addPostParam;
        self.firebaseAuthLogin = firebaseAuthLogin;
        self.addCountyParams = addCountyParams;
        self.getCounties = getCounties;
        self.county = '';
        self.newUser = {};
        self.post = {};
        self.saveBlog = saveBlog;
        self.uploadFiles = uploadFiles;
        self.deleteFeatured = deleteFeatured;
        self.addCategory = addCategory;
        self.file = {};
        self.Files = {};
        self.file.Success = false;
        self.file.progress = 0;
        self.counties = [
            {name: 'Beaver', param: 'beaver'},
            {name: 'Box Elder', param: 'box-elder'},
            {name: 'Cache', param: 'cache'},
            {ame: 'Carbon', param: 'carbon'},
            {ame: 'Daggett', param: 'daggett'},
            {ame: 'Davis', param: 'davis'},
            {ame: 'Duchesne', param: 'duchesne'},
            {ame: 'Emery', param: 'emery'},
            {ame: 'Garfield', param: 'garfield'},
            {name: 'Grand', param: 'grand'},
            {name: 'Iron', param: 'iron'},
            {name: 'Juab', param: 'juab'},
            {name: 'Kane', param: 'kane'},
            {name: 'Millard', param: 'millard'},
            {name: 'Morgan', param: 'morgan'},
            {name: 'Piute', param: 'piute'},
            {name: 'Rich', param: 'rich'},
            {name: 'Salt Lake', param: 'salt-lake'},
            {name: 'San Juan', param: 'san-juan'},
            {name: 'Sanpete', param: 'sanpete'},
            {name: 'Sevier', param: 'sevier'},
            {name: 'Summit', param: 'summit'},
            {name: 'Tooele', param: 'tooele'},
            {name: 'Uintah', param: 'unintah'},
            {name: 'Utah', param: 'utah'},
            {name: 'Wasatch', param: 'wasatch'},
            {name: 'Washington', param: 'washington'},
            {name: 'Wayne', param: 'wayne'},
            {name: 'Weber', param: 'weber'}];

        self.categories = [
            {name: 'Fun in the Sun'},
            {name: 'Snow for All'},
            {name: 'Add'}
        ];
        self.seasons = [
            {name: 'Winter'},
            {name: 'New Years'},
            {name: 'Spring'},
            {name: 'Valentines Day'},
            {name: "St. Patrick's Day"},
            {name: 'Easter'},
            {name: 'Memorial Day'},
            {name: 'Summer'},
            {name: '4th of July'},
            {name: 'Pioneer Day'},
            {name: 'Labor Day'},
            {name: 'Fall'},
            {name: 'Halloween'},
            {name: 'Thanksgiving'},
            {name: 'Holidays'},
            {name: 'Christmas'}
        ];
        self.init = init;
        init();
        function init() {
            self.authObj.$onAuth(function (authData) {
                if (self.authObj.$getAuth()) {
                    self.id = authData.uid;
                    self.isLoggedIn = true;
                    self.user = $firebaseObject(ref.child('users').child(self.id));
                    self.user.$loaded().then(function () {
                        if (self.user.name == undefined) {
                            if (authData.google) {
                                self.newUser.name = authData.google.displayName;
                                self.newUser.img = authData.google.profileImageURL;
                                console.log(self.newUser);
                                self.user.$ref().set(self.newUser);
                            }
                            if (authData.facebook) {
                                console.log(authData);
                                self.newUser.name = authData.facebook.displayName;
                                self.newUser.img = authData.facebook.profileImageURL;
                                self.user.$ref().set(self.newUser);
                            }
                        }
                        if (self.user.blogs = null) {
                            self.user.blogs = self.blogs;
                            self.saveBlog();
                        }
                    });
                }

            });
        }
        function addCategory(category) {
            self.categories.push({name: category});
            self.post.category = category;
            self.blogs.$save(self.post);
        }
        function deleteFeatured () {
            self.post.featured = '';
            self.blogs.$save(self.post);
        }
        function uploadFiles(files) {
            var self = this;
            self.Files = files;
            if (files && files.length > 0) {
                angular.forEach(self.Files, function (file, key) {
                    S3UploadService.Upload(file).then(function (result) {
                        // Mark as success
                        self.file = file;
                        var newname = $filter('spaceless')(self.file.name);
                        self.post.featured = 'https://s3-us-west-2.amazonaws.com/doingutahdaily/' + newname;
                        self.blogs.$save(self.post);
                        self.file.Success = true;
                        //self.file = file;
                    }, function (error) {
                        // Mark the error
                        self.file.Error = error;
                    }, function (progress) {
                        // Write the progress as a percentage
                        self.file.Progress = (progress.loaded / progress.total) * 100
                    });
                });
            }
        }
        function saveBlog() {
            self.user.$ref().child('blogs').update(self.blogs);
        }

        function getCounties(cParam) {
            self.blogs.$loaded()
                .then(function() {
                    angular.forEach(self.blogs, function(blog) {
                        if (blog.cParam == cParam) {
                            self.county = blog.county;
                            console.log(self.county);
                        }
                    })
                })
        }
        self.gameState = function () {
            self.user.$ref().child('blogs').update(self.recorded);
        };
        function addCountyParams(blog, county) {
            blog.cParam = county;
            self.blogs.$save(blog);
        }

        function addPostParam(blog) {
            var postParam = $filter('removeSpacesThenLowercase')(blog.title);
            blog.param = postParam;
            self.blogs.$save(blog);
        }

        function removeBlog(blog) {
            self.blogs.$remove(blog);
        }

        function getChange(blog) {
            self.blogs.$save(blog);
        }

        function getPost() {
            self.blogs.$loaded()
                .then(function () {
                    angular.forEach(self.blogs, function (blogname) {
                        if (blogname.param === $stateParams.blogParam) {
                            self.post = blogname;
                            console.log(self.post);
                        }
                    })
                });
        }

        function addBlog() {
            self.blogs.$add({
                name: 'Jennifer Teagle',
                postDate: '',
                date: newdate,
                avatar: '',
                url: '/jen',
                content: '',
                title: 'Placeholder',
                category: '',
                location: '',
                season: '',
                county: '',
                cparam: '',
                featured: '',
                posted: false
            });
        }

        function firebaseAuthLogin(provider) {
            self.authObj.$authWithOAuthPopup(provider).then(function (authData) {
                console.log("Authenticated successfully with provider " + provider + " with payload:", authData);
                if (authData.google) {
                    self.newUser.name = authData.google.name;
                    self.newUser.img = authData.google.profileImageURL;
                }
                $timeout(function () {
                    init();
                    //$ionicHistory.nextViewOptions({historyRoot: true});
                    $state.go('editor');
                })
            }).catch(function (error) {
                console.error("Authentication failed:", error);
            });
        }
        self.googleLogin = function () {
            self.firebaseAuthLogin('google');
        };
        self.facebookLogin = function () {
            self.firebaseAuthLogin('facebook');
        };

    }
})();
