
import DS from 'ember-data';
import BlogSer from '../serializers/app/blogs';

// export default DS.FixtureAdapter.extend(); 
export default DS.RESTAdapter.extend({
	namespace: 'Blog',
	pathForType: function () {
		return 'api';
	},

	createRecord: function (store, type, record) {
		var data ='title='+ record.get('title')+'&text='+record.get('text');
		return this.ajax('/Blog/api', 'POST', data);


	},
	ajax: function (url, type, hash) {
		hash = hash || {}; // hash may be undefined
		hash.crossDomain = true;
		hash.contentType= 'application/json';
		hash.dataType= 'json';


		hash.xhrFields = {withCredentials: true};
		return this._super(url, type, hash);
	}
});