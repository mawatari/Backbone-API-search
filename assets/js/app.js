/**
 * President View
 */
MyApp.App = Backbone.View.extend({
    el: '#app',

//    tmpl: MyApp.Templates.layout,
    tmpl: Handlebars.templates.layout,

    initialize: function() {
        this.$el.html(this.tmpl());

        this.history = new MyApp.Views.History({
            el: this.$el.find('#history-list')
        });

        this.searchBar = new MyApp.Views.SearchBar({
            el: this.$el.find('#header')
        });

        this.tabs = new MyApp.Views.Tabs({
            el: this.$el.find('#search-results')
        });

        this.footer = new MyApp.Views.Footer({
            el: this.$el.find('#footer')
        });
    }
});

new MyApp.App();
