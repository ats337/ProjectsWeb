projectsApp.controller('UserController',
        function UserController($scope, $resource) {
            $scope.userList = null;


            $scope.getUserList = function() {
                $resource("http://localhost/ProjectsWeb/contents/samplejson/userlist.json").get(
                        function(data) {
                            $scope.userList = data.userList;
                            console.log($scope.userList);
                        });
            };
        }
);
