MyApp.Collections.SearchHistoryList = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('SPA_searchHistory')
});
