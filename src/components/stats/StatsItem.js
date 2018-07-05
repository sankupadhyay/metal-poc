'use strict';

import templates from './StatsItem.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class StatsItem extends Component {
	
}
Soy.register(StatsItem, templates);

StatsItem.STATE = {
	index: {
		value: null
	},

	stats: {
		value: null
	}
};

export { StatsItem };
export default StatsItem;
