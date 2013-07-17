/**
 * Sub View
 */
MyApp.Views.Footer = Backbone.View.extend({
//    tmpl: MyApp.Templates.footer,
    tmpl: Handlebars.templates.footer,

    initialize: function() {
        this.$el.html(this.tmpl());
    }
});
