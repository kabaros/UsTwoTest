require.config({
	paths: {
		jquery: 'lib/jquery.min',
		text: 'lib/require/text',
		mustache: 'lib/mustache/mustache'
	},
	shim: {
        'mustache': {
            exports: 'Mustache'
        }
    }
});

require([ 'jquery', 'app'], function($, App) {
	$(document).ready(function(){
		var app = new App();
		app.init();
	});
});
