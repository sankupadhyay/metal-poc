'use strict';

import templates from './IndustryItem.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class IndustryItem extends Component {
	
}
Soy.register(IndustryItem, templates);

IndustryItem.STATE = {
	index: {
		value: null
	},

	industry: {
		value: null
	}
};

export { IndustryItem };
export default IndustryItem;
