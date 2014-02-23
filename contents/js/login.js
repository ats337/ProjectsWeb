
var LoginView = Backbone.View.extend({
    el: $("#main"),
    template: _.template($("#login-template").html()),
    
    render: function() {
        $(this.el).html(this.template());
        return this;
    }
});

var LoginModel = Backbone.Model.extend({
    defaults: {
        userId : "",
        password : ""
    }

});
