
import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('app/post',params.blog_id);
	}

});
