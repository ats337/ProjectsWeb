var LoginModalController = 
    function ($scope, $rootScope, $modalInstance, loginService) {
        // ログインエラーが発生したかどうか
        $scope.isLoginError = false;
        
        /*
         * モーダルを初期化する
         * @returns 
         */
        $scope.init = function() {
            $scope.isLoginError = false;
            $scope.userId = "";
            $scope.password = "";
        }
        
        // ログイン中かどうかチェックする
        $scope.isLogin = function() {
            return loginService.isLogin();
        };
        
        $scope.login = function() {
            var userId = $scope.userId;
            var password = $scope.password;

            // TODO ログイン通信
            
            if (userId == "U0001" && password == "Passw0rd") {
                // ログイン成功
                loginService.setLogin();
                loginService.setLoginName("テスト 一郎");
                $scope.closeModal(true);
            } else {
                // ログイン失敗
                $rootScope.$broadcast('loginErrorBroadcast');
            }
        }
        
        /*
         * ログインエラー発生時の処理
         */
        $scope.$on('loginErrorBroadcast',  function (event, data) {
            $scope.isLoginError = true;
        });
        
        /*
         * モーダルを閉じる
         */
        $scope.closeModal = function(ret) {
            $modalInstance.close(ret);
        }
    }