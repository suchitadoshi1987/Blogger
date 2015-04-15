
/**
 * Created by suchita on 4/8/15.
 */
import DS from 'ember-data';


export default DS.Model.extend({
	title: DS.attr('string'),
	timestamp: DS.attr('string'),
	text: DS.attr('string')
});

