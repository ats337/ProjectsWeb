var UseraddController =
    function ($scope, $modalInstance, $http) {
        /*
         * モーダルを閉じる
         */
        $scope.closeModal = function(ret) {
            $modalInstance.close(ret);
        }
        
        /**
         * ユーザを追加する
         * @returns {undefined}
         */
        $scope.addUser = function() {
            var userInfo = {
                userId : $scope.userId,
                userName : $scope.userName,
                mailAddress : $scope.mailAddress,
                password : $scope.password,
                passwordConfirm : $scope.passwordConfirm
            };
            
            // TODO 入力チェック
            
            // TODO ユーザ追加
            $http({
                    url: SERVER_PATH + "user/add",
                    data: $.param(userInfo),
                    method: 'POST',
                    headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'}
                }).success(function(data){
                    toastr.success('ユーザを追加しました');
                    $scope.closeModal(true);
                }).error(function(data, status) {
                    toaster.error("ユーザ登録に失敗しました。");
                });
            
//            $http.post(SERVER_PATH + "user/add", JSON.stringify(userInfo))
//                    .success(function(data) {
//                        toastr.success('ユーザを追加しました');
//                        $scope.closeModal(true);
//                    })
//                    .error(function(data, status) {
//                        toaster.error("ユーザ登録に失敗しました。");
//                    });
        }
    }

