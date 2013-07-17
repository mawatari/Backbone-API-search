MyApp.Views.History = Backbone.View.extend({
//    tmpl: MyApp.Templates.history,
    tmpl: Handlebars.templates.history,

    initialize: function() {
        this.$el.html(this.tmpl());
    }
});
