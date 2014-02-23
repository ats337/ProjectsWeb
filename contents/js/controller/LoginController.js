var LoginController =
    function ($rootScope, $scope, $modal, $location, loginService) {
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
        
        /*
         * モーダルを開く
         */
        $scope.openModal = function() {
            $scope.init();
            var modalInstance = $modal.open({
                templateUrl: 'loginModal.html',
                controller: LoginModalController
            });
            
            modalInstance.result.then(function(){
                
            }, function(){
                
            });
        }
        
        $scope.getLoginName = function() {
            return loginService.getLoginName();
        }
    }