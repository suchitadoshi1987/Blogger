/**
 * Created by suchita on 4/8/15.
 */
import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('app/post');
//		return [
//				{
//					"id": 1428543196892,
//					"text": "dsd",
//					"timestamp": "Wed Apr 08 18:33:16 PDT 2015",
//					"title": "abcd"
//				},
//			{
//				"id": 1428543196893,
//				"text": "hhhhdsd",
//				"timestamp": "Thu Apr 09 18:33:16 PDT 2015",
//				"title": "abcooood"
//			}
//			]
	}

});
