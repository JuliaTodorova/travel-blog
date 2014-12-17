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
	tagName: 'a',
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
		this.on('change:checkFilter', this.filterByCheck, this);
		this.collection.on('reset', this.render, this);
	},

	events: {
		'keyup #searchBox': 'searchFilter',
		'click #northAmerica': 'checkFilter'
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

	searchFilter: function(e){
		this.searchFilter = e.target.value;
		this.trigger('change:searchFilter');
	},

	filterBySearch: function() {
		this.collection.reset(directoryData, {silent: true});
		var filterString = this.searchFilter,	
		filtered = _.filter(this.collection.models, function(item){
				return item.get('title').toLowerCase().indexOf(filterString.toLowerCase()) !== -1
			});
			this.collection.reset(filtered);
	}
});

// app


app.init();