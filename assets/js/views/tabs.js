/**
 * Manager View
 */
MyApp.Views.Tabs = Backbone.View.extend({
//    tmpl: MyApp.Templates.tabs,
    tmpl: Handlebars.templates.tabs,

    initialize: function() {
        this.$el.html(this.tmpl());

        this.twitters = new MyApp.Views.SearchResults({
            el: this.$el.find('#twitter-list'),
//            tmpl: MyApp.Templates.twitter
            tmpl: Handlebars.templates.twitter
        });

        this.hotpeppers = new MyApp.Views.SearchResults({
            el: this.$el.find('#hotpepper-list'),
//            tmpl: MyApp.Templates.hotpepper
            tmpl: Handlebars.templates.hotpepper
        });
    }
});
