/**
 * Sub View
 */
MyApp.Views.History = Backbone.View.extend({
//    tmpl: MyApp.Templates.history,
    tmpl: Handlebars.templates.history,

    initialize: function() {
//        _.bindAll(this);
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.searches = this.options.searches;

        MyApp.mediator.on('search', this.addHistory);
    },

    addHistory: function(search) {
        search.id = +new Date();
        this.searches.create(search);
    }
});
