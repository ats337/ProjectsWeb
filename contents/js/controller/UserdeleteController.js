var UserdeleteController =
        function($rootScope, $scope, $modalInstance, $http, userId) {
            $scope.userInfo = {
                "userId": userId
            }

            /*
             * モーダルを閉じる
             */
            $scope.closeModal = function(ret) {
                $modalInstance.close(ret);
            }

            /**
             * ユーザを削除する
             * @returns {undefined}
             */
            $scope.deleteUser = function() {
                // TODO 入力チェック

                // TODO ユーザ削除
                $http({
                    url: SERVER_PATH + "user/delete",
                    data: $.param($scope.userInfo),
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                }).success(function(data, status, headers, config) {
                    toastr.success('ユーザを削除しました');
                    $scope.closeModal(true);
                    $rootScope.$broadcast('refreshUserList');
                }).error(function(data, status, headers, config) {
                    toastr.error("ユーザ削除に失敗しました。");
                });
            }
        }

