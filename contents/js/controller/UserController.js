var UserController =
        function ($scope, $resource, $modal) {
            $scope.userList = null;


            $scope.getUserList = function() {
                $resource("http://localhost/ProjectsWeb/contents/samplejson/userlist.json").get(
                        function(data) {
                            $scope.userList = data.userList;
                            console.log($scope.userList);
                        });
            };

            $scope.openModal = function() {
                var modalInstance = $modal.open({
                    templateUrl: 'useraddModal.html',
                    controller: UseraddController
                });

                modalInstance.result.then(function() {

                }, function() {

                });
            }
        }
