/**
 * Created by suchita on 4/14/15.
 */
/**
 * Created by suchita on 4/8/15.
 */
import ajax from 'ic-ajax';
import FormMixin from '../mixins/form-submit-mixin';


export default Ember.ArrayController.extend(FormMixin, {

	tempModel: [],
	breadCrumb: "Home",
	breadCrumbPath: "app.blogs",

	sortedContent: Ember.computed.sort('model.@each.timestamp', function(a, b){

		//the this keyword does not work here,
		//throws "Object #<Object> has no method 'get'"
		//so we use the Ember keyword to get it working

		var ap = moment(Ember.get(a, 'timestamp')),
			bp = moment(Ember.get(b, 'timestamp'))

		//we return morning before afternoon times
		if(ap !== bp) {
			return bp-ap;
		}

	}),


	recentPosts: function() {
		return this.get('sortedContent').slice(10,20).map(function(item){
			return Ember.mixin(item,{
				dateFormatted: moment(item.get('timestamp')).calendar()
			})
		});
	}.property('sortedContent,model,model.[]'),
	currentPosts: function() {
		return this.get('sortedContent').slice(0,10).map(function(item) {
			return Ember.mixin(item, {
				dateFormatted: moment(item.get('timestamp')).calendar()
			})
		});
	}.property('sortedContent,model,model.[]')
});