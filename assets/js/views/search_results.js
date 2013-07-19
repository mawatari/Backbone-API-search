/**
 * Sub View
 */
MyApp.Views.SearchResults = Backbone.View.extend({
    initialize: function() {
        _.bindAll.apply(_, [this].concat(_.functions(this)));

        this.collections = this.options.collections;
        this.tmpl = this.options.tmpl;
        this.service = this.options.service;

        // Global Eventをハンドリング
        MyApp.mediator.on('search:' + this.service, this.search);
        MyApp.mediator.on('historySearch:' + this.service, this.search);

        this.listenTo(this.collections, 'reset', this.render);
    },

    search: function(search) {
        this.collections.search(search);
    },

    render: function() {
        this.$el.html(this.tmpl({
            models: this.collections.toJSON()
        }));
    }
});
