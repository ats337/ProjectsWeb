var UserController =
        function($scope, $resource, $modal, $http) {
            $scope.userList = null;


//            $scope.getUserList = function() {
//                $resource("http://localhost/ProjectsWeb/contents/samplejson/userlist.json").get(
//                        function(data) {
//                            $scope.userList = data.userList;
//                            console.log($scope.userList);
//                        });
//            };

            $scope.getUserList = function() {
                $http({
                    url: SERVER_PATH + "user/selectList",
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                }).success(function(data, status, headers, config) {
                    //  取得
                    $scope.userList = data;
                }).error(function(data, status, headers, config) {
                    // TODO エラー処理
                });
            };

            $scope.openModal = function(key, user) {
                var modalInstance = null;
                $scope.userId = user.id;

                if (key == 'add') {
                    // 追加
                    modalInstance = $modal.open({
                        templateUrl: 'useraddModal.html',
                        controller: UseraddController
                    });
                } else if (key == 'delete') {
                    // 削除
                    modalInstance = $modal.open({
                        templateUrl: 'userdeleteModal.html',
                        controller: UserdeleteController,
                        resolve: {
                            userId: function() {
                                return $scope.userId;
                            }
                        }
                    });
                }

                modalInstance.result.then(function() {

                }, function() {

                });
            }

            /**
             * ユーザ一覧取得のブロードキャストを受け付ける
             */
            $scope.$on('refreshUserList', function() {
                $scope.getUserList();
            })
        }
