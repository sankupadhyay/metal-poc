'use strict';

import templates from './TestimonialItem.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TestimonialItem extends Component {
	
}
Soy.register(TestimonialItem, templates);

TestimonialItem.STATE = {
	index: {
		value: null
	},

	testimonial: {
		value: null
	}
};

export { TestimonialItem };
export default TestimonialItem;
