// City Filter
// Routers

app = {
	models:{},
	views:{},
	collections:{},
	routers:{},
	init: function(){
		directory = new app.views.Cities(directoryData);
	}
}

// Models 

app = app || {};

app.models.City = Backbone.Model.extend({
	defaults:{
		'img': '',
		'title': '',
		'description': '',
		'continent': '',
		'url': ''
	}
});

// Collections

app.collections.Cities = Backbone.Collection.extend({
	model: app.models.City,
	comparator: function(city){
		return city.get('title');
	}
});

// Views

app = app ||{};

app.views.City = Backbone.View.extend({
	tagName: 'li > a',
	template: _.template($('#city-template').html()),
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});


app.views.Cities = Backbone.View.extend({
	el:'#wrapper',
	initialize: function(data) {
		this.collection = new app.collections.Cities(data);
		this.render();
		this.on('change:searchFilter', this.filterBySearch, this);
		this.collection.on('reset', this.render, this);
	},

	events: {
		'keyup #searchBox': 'searchFilter',
		'click #checkBox input:checkbox': 'filterBySearch'
	},

	render: function(){
		var self = this;
		$('#listing').empty();
		_.each(this.collection.models, function(city){
			self.renderCity(city);
		}, this);
	},

	renderCity: function(city) {
		var newcity = new app.views.City({
			model: city
		});
		$('#listing').append(newcity.render().el);
	},

	searchContinents: function(){
		return $("#checkBox input:checkbox:checked").toArray().map(function(el){
			return $(el).val();
		});	
	},

	searchString: function(){
		return $('#searchBox').val();
	},

	searchFilter: function(e){
		this.searchText = e.target.value;
		this.trigger('change:searchFilter');
	},

	filterBySearch: function() {
		this.collection.reset(directoryData, {silent: true});
		var filterString = this.searchText || this.searchString();
		var continents = this.searchContinents();
		filtered = _.filter(this.collection.models, function(item){
			return (item.get('title').toLowerCase().indexOf(filterString.toLowerCase()) !== -1) &&
				(_.isEmpty(continents) || _.indexOf(continents, item.get('continent')) !== -1)
		});
		this.collection.reset(filtered);
	}
});

// app


app.init();