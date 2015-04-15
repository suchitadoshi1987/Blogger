import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('app', function(){
		this.route('blogs');
		this.route('blog', { path: '/blogs/:blog_id' });



	});

});

export default Router;