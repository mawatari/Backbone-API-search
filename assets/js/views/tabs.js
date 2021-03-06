/**
 * Manager View
 */
MyApp.Views.Tabs = Backbone.View.extend({
//    tmpl: MyApp.Templates.tabs,
    tmpl: Handlebars.templates.tabs,

    events: {
        'click #tab>li': 'changeTab'
    },

    initialize: function() {
        this.$el.html(this.tmpl());

        this.twitters = new MyApp.Views.SearchResults({
            el: this.$el.find('#twitter-list'),
//            tmpl: MyApp.Templates.twitter
            tmpl: Handlebars.templates.twitter,
            collections: new MyApp.Collections.TwitterList(),
            service: 'twitter'
        });

        this.hotpeppers = new MyApp.Views.SearchResults({
            el: this.$el.find('#hotpepper-list'),
//            tmpl: MyApp.Templates.hotpepper
            tmpl: Handlebars.templates.hotpepper,
            collections: new MyApp.Collections.HotpepperList(),
            service: 'hotpepper'
        });

        // Global Eventをハンドリング
        MyApp.mediator.on('search historySearch', this.selectTab);
    },

    changeTab: function(e) {
        var service = this._getService(e.currentTarget);
        MyApp.mediator.trigger('changeTab', service);
    },

    selectTab: function(search) {
        $('a[href^=#' + search.service + ']').tab('show');
    },

    _getService: function(tab) {
        return $(tab).data('service');
    }
});
