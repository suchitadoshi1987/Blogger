/**
 * Created by suchita on 4/8/15.
 */
import Ember from 'ember';
import DS from 'ember-data';


export default
DS.RESTSerializer.extend({


	extractArray: function (store, type, record) {
		return record.blog.posts;

	}

});