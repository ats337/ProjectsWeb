projectsApp.service('loginService', function(){
    // ログインフラグ
    var _isLogin = false;
    // ログイン中メンバー氏名
    var _loginName;
    
    // ログイン中かどうかチェックする
    this.isLogin = function() {
        return _isLogin;
    };
    
    // ログイン状態にする
    this.setLogin = function() {
        _isLogin = true;
    };
    
    // ログアウト状態にする
    this.setLogout = function() {
        _isLogin = false;
    };
    
    this.setLoginName = function(loginName) {
        _loginName = loginName;
    }
    
    this.getLoginName = function() {
        return _loginName;
    }
});