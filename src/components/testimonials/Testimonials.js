'use strict';

import templates from './Testimonials.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Testimonials extends Component {
}
Soy.register(Testimonials, templates);

Testimonials.STATE = {
	
	testimonials: {
		value: []
	}
};

export { Testimonials };
export default Testimonials;