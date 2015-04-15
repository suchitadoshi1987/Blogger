/**
 * Created by suchita on 4/12/15.
 */
import Ember from 'ember';
import ajax from 'ic-ajax';

export default
Ember.Mixin.create({
	formWasSubmitted: false,
	isFormOpen: false,
	isDeleteOpen: false,
	error: '',
	actions: {

		openForm: function (data, evt) {
			var store = this.get('currController.store');
			if (data === 'New Blog') {
				this.set('postModel', Ember.Object.create({
					title: '',
					text: ''
				}));
			}
			this.set('isFormOpen', true);
		},
		submitForm: function (data) {

			if(Ember.isEmpty(this.get('postModel.title')) || Ember.isEmpty(this.get('postModel.text')))
			{
				this.set('error',"You need to fill all required fields");
			}
			else {
				var url = (this.get('postModel') && !Ember.isEmpty(this.get('postModel.id'))) ? 'Blog/api/' + this.get('postModel.id') : 'Blog/api';
				ajax({
					type: 'POST',
					url: url,
					contentType: 'application/x-www-form-urlencoded',
					data: 'title=' + this.get('postModel.title') + '&text=' + this.get('postModel.text')
				}).then(function () {
					this.get('currController.store').find('app/post');
				}.bind(this));
				this.set('error',"");
				this.set('isError',false);
				this.set('formWasSubmitted', true);
			}

		},


		okDelete: function (data) {

			var url = (this.get('postModel') && this.get('postModel.id') !== null) ? 'Blog/api/' + this.get('postModel.id') : 'Blog/api';
			ajax({
				type: 'DELETE',
				url: url

			}).then(function () {
				if (data !== 'Delete All') {
					debugger;
					this.get('currController.model.content').removeObject(this.get('postModel'));
				}
				else {
					this.set('currController.model.content', [])
				}
			}.bind(this));
			this.set('formWasSubmitted', true);

		},

		deletePost: function () {
			this.set('isDeleteOpen', true);
		},
		restoreModel: function () {
			if (this.get('postModel') && this.get('postModel').currentState) {
				this.get('postModel').rollback();
			}
		}
	}
})