define(['jquery', 'mustache', 'defaults', 'models/cv', 'text!templates/cv.html'], function($, Mustache, defaults, CV, cvTemplate){
	var App = function(options){
		options = options || {};
		options.url = options.url || defaults.url;
		options.name = options.name || defaults.name;

		var displayCV =  function(data){
				var cv = new CV(options);
				cv.parseGoogleFeed(data);

				var output = Mustache.render(cvTemplate, cv);
				$("#main").html(output);
		};

		this.init = function(){
			$.getJSON(options.url).done(displayCV);
		};
	};

	return App;
});