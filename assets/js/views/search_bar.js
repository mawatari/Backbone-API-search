MyApp.Views.SearchBar = Backbone.View.extend({
//    tmpl: MyApp.Templates.search_bar,
    tmpl: Handlebars.templates.search_bar,

    initialize: function() {
        this.$el.html(this.tmpl());
    }
});
