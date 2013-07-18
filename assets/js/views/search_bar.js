/**
 * Sub View
 */
MyApp.Views.SearchBar = Backbone.View.extend({
//    tmpl: MyApp.Templates.search_bar,
    tmpl: Handlebars.templates.search_bar,

    events: {
        'click #btn-search': 'search'
    },

    initialize: function() {
        this.$el.html(this.tmpl());
        this.$el.find('#twitter').attr('checked', true);
    },

    search: function(e) {
        var $checked = this.$el.find('input[type=radio]:checked'),
            query    = $('#query').val(),
            service  = $checked.val(),
            search   = {};

        e.preventDefault();

        search.query = query;
        search.service = service;

        // Global Eventを発火
        MyApp.mediator.trigger('search', search);
    }
});
