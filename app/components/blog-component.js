/**
 * Created by suchita on 4/10/15.
 */
import FormMixin from '../mixins/form-submit-mixin';

export default Ember.Component.extend(FormMixin, {

	isMore: false,

	formTitle: function() {
		return 'Edit Blog "'+this.get('postModel.title')+'"';
	}.property('postModel.title'),

	formattedText: function() {
		if(this.get('postModel.text').length> 150){
			this.set('isMore',true);
			return this.get('postModel.text').substr(0,150);

		}
		return this.get('postModel.text');
	}.property('postModel.text')


});