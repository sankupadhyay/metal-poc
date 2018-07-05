'use strict';

import templates from './Industries.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Industries extends Component {
}
Soy.register(Industries, templates);

Industries.STATE = {
	
	industries: {
		value: []
	}
};

export { Industries };
export default Industries;