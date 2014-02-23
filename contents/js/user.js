// ユーザ追加View
var UserAddView = Backbone.View.extend({
    el: $("#main"),
    template: _.template($("#useradd-template").html()),
    model: UserModel,
    events: {
        "click #useradd_add_button" : "onUserAddClick"   
    },
        
    render: function() {
        $(this.el).html(this.template());
        return this;
    },
    
    show: function() {
        window.router.navigate("useradd", true);
        return false;
    },
    
    // 登録ボタン押下時の処理
    onUserAddClick: function() {
        var reqData = {
            "userId": $("#useradd_userId").val(),
            "password": $("#useradd_password").val(),
            "userName": $("#useradd_userName").val()
        }
        this.model.set(reqData);
        this.model.save(null, {
            success: function(model, resp) {
                alert("success");
            },
            error: function(model, resp) {
                alert("error");
            }
        });
    }
});


// ユーザ一覧View
var UserListView = Backbone.View.extend({
    el: $("#main"),
    initialize: function() {
        this.collection.fetch({
            error: $.proxy(this.error, this),
            success: $.proxy(this.render, this)
        });
    },
    render: function() {
        _(this.collection.models).each(function(item) {
            this.appendItem(item);
        }, this);
    },
    appendItem: function(item) {
        var user = {
            id: item.get("id"),
            userId: item.get("userId"),
            userName: item.get("userName"),
            password: item.get("password")
        };
        $(this.el).append(this.template(user));
    },
    error: function() {
        alert("error");
    },
    template: _.template($("#userlist-template").html())
});

var UserModel = Backbone.Model.extend({
    urlRoot: SERVER_PATH + "user/add",
});

var UserCollection = Backbone.Collection.extend({
    model: UserModel,
    url: SERVER_PATH + "user/selectList"
});